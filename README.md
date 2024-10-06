# Testes automatizados com Cypress - Intermediário

Este projeto foi desenvolvido durante o curso **Cypress Intermediário**, com o objetivo de praticar e aplicar as técnicas e funcionalidades de automação de testes. Ao longo do curso, explorei diferentes abordagens para criar testes  otimizados para aplicações web. Abaixo, destaco as principais funcionalidades aprendidas e aplicadas no projeto.

## Funcionalidades Aplicadas

### 1. Configuração do Ambiente com Docker
Utilizei o Docker para configurar o ambiente de desenvolvimento local, garantindo que o Cypress e os outros serviços necessários rodassem de maneira consistente e isolada.

![image](https://github.com/user-attachments/assets/7ec8194c-72b5-4465-99ee-2a5928c2ebe9)


### 2. Instalação e Configuração do Cypress
Configuração do Cypress para execução de testes automatizados, tanto de interface gráfica (GUI) quanto de APIs. A estrutura do projeto foi organizada para comportar esses dois tipos de testes.

![image](https://github.com/user-attachments/assets/5555f163-45eb-4bd7-90ba-924724aa94a1)


### 3. Testes Automatizados de Interface Gráfica (GUI)
Criação de testes para validar a experiência do usuário em diferentes cenários, garantindo que os fluxos principais da interface estão funcionando corretamente.

![image](https://github.com/user-attachments/assets/89e1535d-6040-433a-bca1-578fe182e8f5)


### 4. Testes Automatizados de API
Automatização de testes para garantir o correto funcionamento das APIs, incluindo a capacidade de visualizar o feedback dos testes diretamente no navegador.

![image](https://github.com/user-attachments/assets/099a21c0-e7cc-4911-a93c-6670f2106abe)


### 5. Testes de APIs com Tokens de Acesso
Execução de testes em APIs que requerem autenticação por token, validando a segurança e o controle de acesso nas requisições.

### 6. Testes Otimizados e Direto ao Ponto
Foco em otimizar os testes, reduzindo redundâncias e melhorando a eficiência, sem comprometer a cobertura e qualidade dos testes.

### 7. Gerenciamento de Sessões de Usuário
Automatização do salvamento da sessão do usuário no navegador, permitindo a restauração automática em futuros testes. Também foi implementada a validação de sessões para garantir que o usuário continue autenticado quando necessário.

### 8. Limpeza e Criação de Massa de Dados
Implementação de scripts para criar e limpar massa de dados antes de cada teste, garantindo que os testes rodem em um ambiente consistente e previsível.

### 9. Proteção de Dados Sensíveis
Uso de boas práticas para proteger dados sensíveis, como senhas e tokens de acesso, garantindo que essas informações não sejam expostas durante a execução dos testes.

### 10. Organização dos Testes em Camadas
Os testes foram organizados em diferentes camadas (API, CLI, GUI), com o uso de comandos customizados, para melhorar a legibilidade e reutilização de código.


### 11. Estruturação de Testes
Cada teste foi estruturado com pré-condições, ações e resultados esperados claramente definidos, garantindo que o fluxo seja claro e fácil de manter.

![image](https://github.com/user-attachments/assets/da851f21-8528-4c6f-b77b-ea29627398f6)


### 12. Geração de Dados Aleatórios
Implementação de geração automática de dados aleatórios para uso nos testes, tornando os cenários de teste mais dinâmicos e cobrindo uma maior variedade de casos.

### 13. Comandos a Nível de Sistema Operacional
Execução de comandos diretamente no sistema operacional para manipular arquivos e realizar operações necessárias para validar o comportamento da aplicação.


Instruções para configuração no repositório original do curso [estrutura do curso](./lessons/_course-structure_.md).

