# Cadastro de carro
**RF**
Deve ser possível cadastrar um novo carro
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastra um carro com a plava já existente.
Não deve ser possível alterar a placa de um carro para um placa já cadastrada.
O carro deve ser cadastrado, por padrão com disponibilidade.
O cadastro de um novo carro só pode ser feito por um ADM


# Listagem de carro
**RF**
Deve ser possível listar todos os carro disponíveis
Deve ser possível listar todos os carro diponíveis pelo nome da categoria
Deve ser possível listar todos os carro diponíveis pelo nome da marca
Deve ser possível listar todos os carro diponíveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro.
**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar os carros

**RNF**

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível uma especificação já exixstente para o mesmo carro.
Somente um usuário ADM pode fazer o cadastro de uma especificação.



# Cadastro de imagens do carro
**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros.


**RNF**
Utilizar o multer para upload dos arquivos

**RN**
Deve ser possível cadastrar mais de uma imagem por um carro
Só um ADM pode fazer o cadastro de uma foto 


# Alugel de carro
**RF**
Deve ser possível cadastar um aluguel
**RNF**

**RN**
O aluguel deve ter duração mínima de 24 hora.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro


**RF**

**RNF**

**RN**