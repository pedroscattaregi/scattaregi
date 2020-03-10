#language: en

Feature: Cálculo de Multiplicação.

Scenario Outline: Fazer uma Multiplicação.
When eu multiplico <laranjas> pelo <valor_unitario>
Then o valor pago na <compra>.

Examples:

|laranjas   |valor_unitario |compra|
|2          |3              |6     |
|7          |2              |14    |
|12         |1.5            |18    |
