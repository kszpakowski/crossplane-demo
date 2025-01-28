# Crossplane demo

## Setup

1. Create crossplane provider secrets in mgmt-cluster/secrets. Secret name must be composed of `cellName-providerType-accountId`. ([docs](https://docs.crossplane.io/v1.18/getting-started/provider-aws/#generate-an-aws-key-pair-file))

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: cell-1-s3-779291601624
      namespace: crossplane-system
    data:
      creds:  ...
    ```

1. Create management cluster by running `./mgmt-cluster/create.sh`

Kind cluster will be created and bootstrapped with argocd.

- Crossplane and all resources will be created by argo
- The argo admin password will be copied to your clipboard
- Port forward for argo will be created on port 8080
- ArgoCD login page will open and you can login as admin with password from clipboard

<img src=./docs/img/argo-apps.png>

## Destroy

> AWS resources are not going to be removed.

Run `./mgmt-cluster/create.sh` to destroy kind cluster.

## Repository structure

- docs - documentation assets
- frontend - sample frontend application presenting data from kubernetes-api-client
- gitops - kubernetes manifests
- kubernetes-api-client - Demo of querying Crossplane Composite Resources from kubernetes API using nodejs.
- mgmt-cluster - local kind cluster with crossplane and argocd

<img src="./docs/img/frontend.png">

## Crossplane resources

- Compositions - A template to define how to create resources.
- Composite Resource Definition (XRD) - A custom API specification.
- Composite Resource (XR) - Created by using the custom API defined in a Composite Resource Definition. XRs use the Composition template to create new managed resources.
- Claims (XRC) - Like a Composite Resource, but with namespace scoping.

```mermaid
graph LR

%% Composite Resource
subgraph Composite Resource
  xr1[Cell 1]
  xr2[Cell 2]
  xr3[Cell 3]
end

%% Composite Resource Definition
subgraph Composite Resource Definition
  xrd[Cell API]
end

%% Composition
subgraph Composition
  composition[Cell Implementation]
end

%% Managed Resource
subgraph Managed Resource
  mrELB[ELB]
  mrVPC[VPC]
  mrEKS[EKS]
end

%% Provider
subgraph Provider
  provS3[AWS S3 Provider]
  provVPC[AWS VPC Provider]
  provEKS[AWS EKS Provider]
end

%% Provider Configuration
subgraph Provider Configuration
  confS3[Account 1234<br>S3 Provider Config]
  confVPC[Account 1234<br>VPC Provider Config]
  confEKS[Account 1234<br>EKS Provider Config]
end

%% Connections between components
xr1 --> xrd
xr2 --> xrd
xr3 --> xrd

xrd --> composition

composition --> mrELB
composition --> mrVPC
composition --> mrEKS

mrELB --> provS3
mrVPC --> provVPC
mrEKS --> provEKS

provS3 --> confS3
provVPC --> confVPC
provEKS --> confEKS
```

## Architecture

```mermaid
graph LR

%% GitOps Repository
subgraph GitOps Repository
  apps[apps/compositions.yaml]
  cellComp[compositions/cell/cell-composition.yaml]
  cellXrd[compositions/cell/cell-xrd.yaml]

  cell1App[apps/cell-1.yaml]
  cell1Def[cells/1/cell.yaml]

  cell2App[apps/cell-2.yaml]
  cell2Def[cells/2/cell.yaml]

  cellNApp[apps/cell-3.yaml]
  cellNDef[cells/3/cell.yaml]
end

%% Management EKS Cluster
subgraph Management EKS Cluster
  subgraph ArgoCD
    argocdCell1[Cell1 Application]
    argocdCell2[Cell2 Application]
    argocdCellN[CellN Application]
    argocdCompositions[Compositions Application]
  end

  subgraph Crossplane
    xrCell1[Cell1<br>type:xcell<br>name: cell-1<br>account: 12345<br>region: eu-central-1<br>CompositeResource]
    xrCell2[Cell2<br>type:xcell<br>name: cell-2<br>account: 6789<br>region: eu-central-1<br>CompositeResource]
    xrCellN[CellN<br>type:xcell<br>name: cell-n<br>account: 65432<br>region: eu-central-1<br>CompositeResource]

    xrdComp[xCell Composite Resource Definition]
    
    subgraph CellComposition
      mgmtEks[Management EKS]
      eksCluster1[Cluster 1 EKS]
      eksCluster2[Cluster 2 EKS]

      mgmtEks --> eksCluster1
      mgmtEks --> eksCluster2
    end

    eksProvider[AWS EKS Provider]

    providerAcc1[Account 12345 Provider Config]
    providerAcc2[Account 6789 Provider Config]
    providerAcc3[Account 65432 Provider Config]

    eksCluster1 --> eksProvider
    eksCluster2 --> eksProvider
    mgmtEks --> eksProvider

    eksProvider --> providerAcc1
    eksProvider --> providerAcc2
    eksProvider --> providerAcc3
  end
end

%% AWS Account 12345
subgraph AWS Account 12345
  acc1Mgmt[Management EKS]
  acc1Cluster1[Cluster 1 EKS]
  acc1Cluster2[Cluster 2 EKS]

  providerAcc1 --> acc1Mgmt
  providerAcc1 --> acc1Cluster1
  providerAcc1 --> acc1Cluster2
end

%% AWS Account 6789
subgraph AWS Account 6789
  acc2Mgmt[Management EKS]
  acc2Cluster1[Cluster 1 EKS]
  acc2Cluster2[Cluster 2 EKS]

  providerAcc2 --> acc2Mgmt
  providerAcc2 --> acc2Cluster1
  providerAcc2 --> acc2Cluster2
end

%% AWS Account 65432
subgraph AWS Account 65432
  acc3Mgmt[Management EKS]
  acc3Cluster1[Cluster 1 EKS]
  acc3Cluster2[Cluster 2 EKS]

  providerAcc3 --> acc3Mgmt
  providerAcc3 --> acc3Cluster1
  providerAcc3 --> acc3Cluster2
end

%% Connections between components
apps --> argocdCompositions
cellComp --> argocdCompositions
cellXrd --> argocdCompositions

argocdCompositions --> xrdComp
argocdCompositions --> CellComposition
xrdComp --> CellComposition

argocdCell1 --> xrCell1
argocdCell2 --> xrCell2
argocdCellN --> xrCellN

xrCell1 --> xrdComp
xrCell2 --> xrdComp
xrCellN --> xrdComp

cell1App --> argocdCell1
cell1Def --> argocdCell1

cell2App --> argocdCell2
cell2Def --> argocdCell2

cellNApp --> argocdCellN
cellNDef --> argocdCellN
```

## Q&A

> TODO

1. __Q:__ How to disable reconciliation

   __A:__ ...

1. __Q:__ How to manage resources in multiple AWS accounts

   __A:__ ...

1. __Q:__ How to query managed resources

   __A:__ Use kubernetes API client library to fetch managed resources. Check example code in `kubernetes-api-client`

1. __Q:__ How to manage cell's management cluster

   __A:__ Crossplane can create EKS clusters and deploy applications using helm provider ([docs](https://docs.crossplane.io/v1.18/guides/multi-tenant/#control-plane-of-control-planes))

1. __Q:__ How to progressively update XRs (manual Composition updates)

   __A:__ TODO

## References

- [Crossplane documentation](https://docs.crossplane.io/v1.18/)
- [Reference platfrom implementation for AWS](https://github.com/upbound/platform-ref-aws) - example how to build platform API
- [Community extensions](https://github.com/orgs/crossplane-contrib/repositories?type=all) - additional functions, providers
- [Upbound marketplace](https://marketplace.upbound.io) - providers,configurations, functions
- [AWS Network Configuration](https://marketplace.upbound.io/configurations/upbound/configuration-aws-network/v0.22.0/compositions/xnetworks.aws.platform.upbound.io/aws.platform.upbound.io/XNetwork)
- [AWS EKS configuration](https://marketplace.upbound.io/configurations/upbound/configuration-aws-eks/v0.15.0)

## TODO

- [ ] [configure argo cd](https://docs.crossplane.io/v1.18/guides/crossplane-with-argo-cd/)
- [ ] Fix provider config being not ready
- [ ] Add custom composition function
  - [ ] try cdk8s to generate resources
- [ ] pass data between pipeline steps
  - [ ] using xrd status properties
  - [ ] using environment
- [ ] Use single provider per account instead of splitting per managed resource type
- [ ] Create custom provider for KindCluster, to enable Compositions POCs in local env
