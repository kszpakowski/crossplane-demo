# Kubernetes API client

Demo of querying Crossplane Composite Resources from kubernetes API using nodejs.

## Setup

To install dependencies:

```bash
npm install
```

To run:

```bash
npm run build:watch
npm run dev
```

## Usage

To query resources

```bash
curl http://localhost:4000/cells | jq
```

Response

```json
[
  {
    "apiVersion": "infra.karolsz.com/v1alpha1",
    "kind": "xCell",
    "metadata": {
      "labels": {
        "app.kubernetes.io/instance": "cell-1",
        "crossplane.io/composite": "cell-1"
      },
      "name": "cell-1",
      "resourceVersion": "2380",
      "uid": "2e8dd7e4-9b8c-4b73-b826-0536be7cd3e6"
    },
    "spec": {
      "account": "779291601624",
      "compositionRef": {
        "name": "cell"
      },
      "compositionRevisionRef": {
        "name": "cell-f330c75"
      },
      "compositionUpdatePolicy": "Automatic",
      "region": "eu-central-1",
      "resourceRefs": [
        {
          "apiVersion": "s3.aws.upbound.io/v1beta1",
          "kind": "Bucket",
          "name": "cell-1-zx4rn"
        }
      ],
      "size": "Large"
    },
    "status": {
      "conditions": [
        {
          "lastTransitionTime": "2025-01-24T20:39:33Z",
          "reason": "ReconcileSuccess",
          "status": "True",
          "type": "Synced"
        },
        {
          "lastTransitionTime": "2025-01-24T20:42:02Z",
          "reason": "Available",
          "status": "True",
          "type": "Ready"
        }
      ]
    }
  }
]
```
