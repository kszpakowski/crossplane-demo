import { manifest } from "./generated/v1alpha1.xcells.infra.karolsz.com"
import YAML from 'yaml'

const yaml = YAML.stringify(manifest({
    metadata: {
        name: "cell0"
    },
    spec: {
        account: "1",
        region: "test",
        size: "small"
    }
}))

console.log(yaml)

/*
apiVersion: infra.karolsz.com/v1alpha1
kind: xCell
metadata:
  name: cell0
spec:
  account: "1"
  region: test
  size: small
*/