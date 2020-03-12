#language: pt

@verificando_elementos1
Funcionalidade: Verificando elementos visiveis na tela

Cenário: Verificar elemento Visual com sucesso
Quando eu clico no botao
Então eu verifico se o texto apareceu na tela com sucesso

Cenário: Verificar elemento não visivel com sucesso
Quando eu clico no botao de novo
Então eu verifico se o texto desapareceu da tela com sucesso