# Anderson Heidrich - Teste Itens Dinâmicos



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://bug.brave.ag/arena/anderson-heidrich-teste-itens-dinamicos.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://bug.brave.ag/arena/anderson-heidrich-teste-itens-dinamicos/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/user/project/merge_requests/auto_merge/)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Itens Dinâmicos :: Teste FrontEnd

Uma aplicação web que consome a API de Rick and Morty para exibir uma lista de personagens, permitindo visualizar detalhes individuais e marcar favoritos — que ficam salvos em um menu dedicado.

## ✨ Funcionalidades

- ✅ Listagem de personagens da série Rick and Morty
- 🔍 Busca por personagens pelo nome
- ⭐ Favoritar personagens para acesso rápido
- 📄 Visualização dos detalhes de cada personagem
- ⚡ Interface responsiva e moderna

## 🛠 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/) com [Apollo Client](https://www.apollographql.com/docs/react/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js (versão recomendada: 18+)
- npm ou yarn

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/itens-dinamicos.git
cd itens-dinamicos

# Instale as dependências
npm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
