kind create cluster --config kind-config.yaml
kubectx kind-mgmt
kubectl create ns argocd
kubectl -n argocd apply -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.14.0-rc5/manifests/install.yaml
kubectl -n argocd rollout status deployment argocd-server
kubectl apply -f apps.yaml
kubectl apply -f secrets/
kubectl -n argocd port-forward svc/argocd-server 8080:443 &
open https://localhost:8080
kubectl -n argocd get secrets/argocd-initial-admin-secret --template={{.data.password}} | base64 -d | pbcopy