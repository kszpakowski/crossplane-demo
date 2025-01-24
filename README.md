# Crossplane demo

## Setup

1. Create crossplane provider secrets in mgmt/secrets ([docs](https://docs.crossplane.io/v1.18/getting-started/provider-aws/#generate-an-aws-key-pair-file))

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: s3-779291601624
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

<img src=./img/argo-apps.png>

## Destroy

> AWS resources are not going to be removed.

Run `./mgmt-cluster/create.sh` to destroy kind cluster. 

## Repository structure

> TODO

## Crossplane resources

- Compositions - A template to define how to create resources.
- Composite Resource Definition (XRD) - A custom API specification.
- Composite Resource (XR) - Created by using the custom API defined in a Composite Resource Definition. XRs use the Composition template to create new managed resources.
- Claims (XRC) - Like a Composite Resource, but with namespace scoping.

```mermaid
graph LR

subgraph Composite Resource
xr1[Cell 1]
xr2[Cell 2]
xr3[Cell 3]
end

subgraph Composite Resource Definition
xrd[Cell API]
end

subgraph Composition
x[Cell Impl]
end

subgraph Managed Resource
mr1[ELB]
mr2[VPC]
mr3[EKS]
end

subgraph Provider
p1[AWS S3 Provider]
p2[AWS VPC Provider]
p3[AWS EKS Provider]
end

subgraph Provider Configuration
pc1[Account 1234 <br> S3 provider conf]
pc2[Account 1234 <br> VPC provider conf]
pc3[Account 1234 <br> EKS provider conf]
end

xr1 --> xrd
xr2 --> xrd
xr3 --> xrd

xrd --> x

x --> mr1
x --> mr2
x --> mr3

mr1 --> p1
mr2 --> p2
mr3 --> p3

p1 --> pc1
p2 --> pc2
p3 --> pc3

```

## Architecture

```mermaid
graph LR

subgraph Management EKS cluster
    subgraph ArgoCD
        c1[Cell1<br>Application]
        c2[Cell2<br>Application]
        cn[CellN<br>Application]

        ac[Compositions<br>Application]
    end

    subgraph Crossplane
        xr1[Cell1<br>type:xcell<br>name: cell-1<br>account: 12345<br>CompositeResource]
        xr2[Cell2<br>type:xcell<br>name: cell-2<br>account: 6789<br>CompositeResource]
        xrn[CellN<br>type:xcell<br>name: cell-n<br>account: 65432<br>CompositeResource]

        cxrd[xCell<br>Compositie Resource Definition]
        subgraph cc[Cell Composition]
          eksm[Management<br>EKS]
          eks1[Cluster 1<br>EKS]
          eks2[Cluster 2<br>EKS]

          eksm --> eks1
          eksm --> eks2
        end

        ep[AWS EKS<br>Provider]

        epc1[AWS EKS<br>Account 12345<br>Provider configuration]
        epc2[AWS EKS<br>Account 6789<br>Provider configuration]
        epc3[AWS EKS<br>Account 65432<br>Provider configuration]

        eks1 --> ep
        eks2 --> ep
        eksm --> ep

        ep --> epc1
        ep --> epc2
        ep --> epc3
          
    end
end

subgraph AWS account 12345
    a1eksm[Management<br>EKS]
    a1eks1[Cluster 1<br>EKS]
    a1eks2[Cluster 2<br>EKS]

    epc1 --> a1eksm
    epc1 --> a1eks1
    epc1 --> a1eks2
end

subgraph AWS account 6789
    a2eksm[Management<br>EKS]
    a2eks1[Cluster 1<br>EKS]
    a2eks2[Cluster 2<br>EKS]

    epc2 --> a2eksm
    epc2 --> a2eks1
    epc2 --> a2eks2
end

subgraph AWS account 65432
    a3eksm[Management<br>EKS]
    a3eks1[Cluster 1<br>EKS]
    a3eks2[Cluster 2<br>EKS]

    epc3 --> a3eksm
    epc3 --> a3eks1
    epc3 --> a3eks2
end


subgraph GitOps Repository
  gc[apps/compositions.ymal]
  gcdc[compositions/cell-composition.ymal]
  gcdxrd[compositions/cell-xrd.ymal]

  grc1[apps/cell-1.yaml]
  grc1d[apps/cells/1/cell.yaml]

  grc2[apps/cell-2.yaml]
  grc2d[apps/cells/2/cell.yaml]

  grcn[apps/cell-n.yaml]
  grcnd[apps/cells/n/cell.yaml]
end

gc --> ac
gcdc --> ac
gcdxrd --> ac

ac --> cxrd
ac --> cc

cxrd --> cc

c1 --> xr1
c2 --> xr2
cn --> xrn

xr1 --> cxrd
xr2 --> cxrd
xrn --> cxrd

grc1 --> c1
grc1d --> c1

grc2 --> c2
grc2d --> c2

grcn --> cn
grcnd --> cn
```
