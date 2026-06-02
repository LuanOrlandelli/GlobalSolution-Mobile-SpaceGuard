# 🚀 SpaceGuard – Sistema Inteligente de Monitoramento Ambiental com Dados Espaciais

## 📱 Global Solution – Mobile Development & IoT

### Integrantes

* **Luan Orlandelli Ramos** – RM 554747
* **Jorge Luiz Silva Santos** – RM 554418
* **Arthur Bobadilla Franchi** – RM 555056

---

## 📖 Sobre o Projeto

O **SpaceGuard** é uma aplicação mobile desenvolvida em React Native com Expo que simula um sistema inteligente de monitoramento ambiental utilizando dados espaciais e informações provenientes de satélites.

A solução foi criada com o objetivo de apoiar a prevenção de desastres ambientais, permitindo o acompanhamento de indicadores, alertas, ocorrências e informações estratégicas relacionadas a riscos climáticos e ambientais.

O aplicativo funciona como um dashboard central de monitoramento, reunindo informações relevantes em uma interface intuitiva, moderna e acessível.

---

## 🌎 Problema

Fenômenos ambientais como queimadas, secas, enchentes e eventos climáticos extremos geram impactos sociais, econômicos e ambientais significativos.

Muitas vezes esses eventos são identificados tardiamente, reduzindo a capacidade de prevenção e resposta.

Com o avanço da Indústria Espacial, satélites passaram a fornecer dados cada vez mais precisos sobre o planeta, permitindo monitoramento em larga escala e suporte à tomada de decisão.

---

## 💡 Solução Proposta

O SpaceGuard centraliza informações ambientais em uma aplicação mobile capaz de:

* Exibir indicadores ambientais relevantes;
* Apresentar alertas de risco;
* Registrar ocorrências locais;
* Simular um centro de monitoramento ambiental;
* Consumir dados reais de uma API pública da Open-Meteo;
* Armazenar dados localmente para utilização contínua.

A proposta demonstra como tecnologias espaciais podem ser utilizadas para apoiar ações de monitoramento ambiental e prevenção de desastres.

---

# 🎯 Objetivos

* Demonstrar a aplicação de tecnologias mobile na área ambiental;
* Integrar conceitos da Indústria Espacial ao monitoramento terrestre;
* Utilizar dados reais e simulados para tomada de decisão;
* Aplicar os principais conceitos estudados na disciplina Mobile Development & IoT.

---

# 🛰️ Relação com a Indústria Espacial

O projeto está diretamente conectado ao tema da Global Solution ao demonstrar como dados obtidos por satélites podem contribuir para:

* Monitoramento ambiental;
* Identificação de áreas de risco;
* Prevenção de desastres naturais;
* Apoio à gestão ambiental.

Além disso, a aplicação realiza integração com API climática externa Open-Meteo, consumindo dados reais de temperatura, umidade e vento.

---

# 🌱 ODS Relacionados

O projeto contribui principalmente para os seguintes Objetivos de Desenvolvimento Sustentável (ODS):

### ODS 13 – Ação Contra a Mudança Global do Clima

Monitoramento de riscos ambientais e apoio à prevenção de desastres.

### ODS 15 – Vida Terrestre

Proteção de ecossistemas e preservação ambiental.

---

# 🛠️ Tecnologias Utilizadas

## React Native

Framework utilizado para desenvolvimento da aplicação mobile multiplataforma.

## Expo

Plataforma utilizada para simplificar o desenvolvimento, testes e execução do aplicativo.

## Expo Router

Responsável pela navegação entre as telas da aplicação.

## JavaScript

Linguagem utilizada para implementação de toda a solução.

## Context API

Utilizada para compartilhamento global de estados entre os componentes, como tema e usuário.

## AsyncStorage

Responsável pela persistência local de dados, garantindo armazenamento das preferências e ocorrências registradas.

## React Native Chart Kit

Biblioteca utilizada para geração dos gráficos presentes nos dashboards.

## Lucide React Native

Biblioteca de ícones utilizada para melhorar a experiência visual da aplicação.

## API externa Open-Meteo

Utilizada para obtenção de dados reais relacionados à temperatura, umidade e vento.

---

# 📲 Funcionalidades

## 🏠 Tela Inicial

* Navegação central para todas as funcionalidades do sistema.
* Interface temática inspirada em centros de monitoramento.

---

## 📊 Dashboard Ambiental

* Indicadores ambientais.
* Gráfico de evolução semanal.
* Distribuição dos níveis de risco.
* Visualização rápida de informações estratégicas.

---

## 🚨 Alertas Ambientais

* Listagem de alertas.
* Filtros por nível de risco.
* Indicadores resumidos.
* Exibição visual dos tipos de ocorrência.

---

## 📝 Registro de Ocorrências

* Formulário com validação.
* Cadastro de novas ocorrências.
* Persistência local com AsyncStorage.
* Histórico de registros.

---

## 🛰️ Central Espacial

* Integração com API pública da Open-Meteo.
* Exibição de imagem astronômica.
* Atualização por Pull-To-Refresh.
* Tratamento de falhas e fallback.

---

## 📡 Centro de Monitoramento

* Indicadores operacionais.
* Áreas monitoradas.
* Alertas ativos.
* Status operacional da solução.

---

## ⚙️ Perfil

* Alteração do nome do usuário/equipe.
* Alternância entre tema claro e escuro.
* Persistência das preferências.

---

## ℹ️ Sobre a Solução

* Explicação do problema.
* Objetivos.
* Tecnologias utilizadas.
* Relação com os ODS.

---

# 📋 Requisitos da Disciplina Atendidos

| Requisito                | Implementação                                          |
| ------------------------ | ------------------------------------------------------ |
| Expo Router              | Navegação entre múltiplas telas                        |
| useState                 | Formulários, filtros e estados da aplicação            |
| useEffect                | Carregamento de dados e integração com API             |
| Context API              | Gerenciamento global de tema e usuário                 |
| AsyncStorage             | Persistência de ocorrências, tema e usuário            |
| Formulário com validação | Tela Registrar Ocorrência                              |
| Dashboards               | Dashboard Ambiental, Alertas e Centro de Monitoramento |
| Gráficos                 | Linha e Pizza                                          |
| Componentização          | Header, CardIndicador, StatusBadge e gráficos          |
| Integração com API       | Open-Meteo                                             |
| Tema dinâmico            | Claro e escuro                                         |
| Persistência de dados    | AsyncStorage                                           |
| Dados visuais            | Cards, indicadores, gráficos e listas                  |

---

# 📷 Capturas de Tela

## Tela Inicial

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 32" src="https://github.com/user-attachments/assets/f94f5f62-4baf-435a-bdd9-b6b460af02c6" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 355" src="https://github.com/user-attachments/assets/cd8557c4-a007-451d-9be2-0ac520fa4a41" />


## Dashboard Ambiental

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 36" src="https://github.com/user-attachments/assets/14eb865e-d81f-4d30-8e9b-7a087567f6b0" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 33" src="https://github.com/user-attachments/assets/0c0f3b13-9e7e-41ab-b3de-7a0f6d1c4813" />


## Alertas Ambientais

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 36 (1)" src="https://github.com/user-attachments/assets/38ddbfce-89d0-4d53-a894-98399dfe97fe" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 33 (1)" src="https://github.com/user-attachments/assets/6b3d9577-6afd-4ff2-8e7e-356b3674daed" />


## Registrar Ocorrência

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 34" src="https://github.com/user-attachments/assets/399bc24a-caa7-40df-84ec-8842edd43830" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 36 (2)" src="https://github.com/user-attachments/assets/26ebbfe5-a3c3-4eea-a701-5d7e3c849423" />


## Central Espacial

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 34 (1)" src="https://github.com/user-attachments/assets/f9ec2d3f-dfc6-479b-8e85-d2b11240fe6a" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 36 (3)" src="https://github.com/user-attachments/assets/2ba3d4c7-8cde-4624-a50a-7676605cfc66" />


## Centro de Monitoramento

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 34 (2)" src="https://github.com/user-attachments/assets/56032a46-a3af-433d-a6e6-dbcbe4cdbfc9" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 37" src="https://github.com/user-attachments/assets/1fb799a3-c168-4cf7-94ba-773788b2b845" />


## Perfil

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 35" src="https://github.com/user-attachments/assets/f15b703b-b0c6-48d2-9074-70a5847f284f" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 37 (1)" src="https://github.com/user-attachments/assets/0a1f7fff-a722-4793-883f-7e20b6d2326e" />


## Sobre a solução

<img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 35 (1)" src="https://github.com/user-attachments/assets/42a58778-d6f1-4d06-98c3-0464d436e547" /> <img width="400" alt="WhatsApp Image 2026-05-28 at 23 46 37 (2)" src="https://github.com/user-attachments/assets/4fcef94d-76ab-4456-b6ae-4a7bfe32c652" />


---

# 🎥 Vídeo Demonstrativo

Link do vídeo:

**([Link da gravação](https://youtu.be/hbfTugLeXmM))**

---

# 🔗 Repositório

GitHub:

https://github.com/LuanOrlandelli/GlobalSolution-Mobile-SpaceGuard

---

# ▶️ Como Executar

```bash
git clone https://github.com/LuanOrlandelli/GlobalSolution-Mobile-SpaceGuard

cd GlobalSolution-Mobile-SpaceGuard

npm install

npx expo start
```

Após iniciar o Expo, basta abrir o aplicativo através do Expo Go ou em um emulador Android/iOS.

---

# ✅ Conclusão

O SpaceGuard demonstra como aplicações mobile podem utilizar dados espaciais para apoiar o monitoramento ambiental e a prevenção de desastres. A solução integra recursos modernos de desenvolvimento mobile, visualização de dados, persistência local e consumo de APIs externas, alinhando-se aos objetivos da Global Solution e aos conceitos estudados na disciplina Mobile Development & IoT.
