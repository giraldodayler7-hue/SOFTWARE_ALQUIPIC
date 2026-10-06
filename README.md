# SOFTWARE_ALQUIPIC 
¿De qué trata este código?

Este código es un sistema de facturación digital en Python diseñado para ALQUIPC, una empresa dedicada al alquiler de equipos. Su función principal es automatizar el cálculo de los costos de alquiler basándose en la cantidad de equipos, los días que se van a usar, el lugar de entrega o recogida, y un sistema de descuentos por días adicionales. Al final, genera un comprobante digital detallado en la consola.
¿Cómo funciona paso a paso?

    Validación de Datos de Entrada (Con manejo de errores):
    El programa utiliza bucles while y bloques try-except para asegurar que el usuario ingrese datos válidos y lógicos:

        Cantidad de equipos: Pide un número entero que debe ser mínimo 2.

        Días iniciales: Pide el tiempo base del alquiler (mayor a 0).

        Días adicionales: Permite agregar días extras (puede ser 0 o más).

    Selección de Ubicación:
    Muestra un menú con tres opciones que afectan el costo final de la factura:

        1. Dentro de la ciudad: Precio base sin cargos extras ni descuentos por ubicación.

        2. Fuera de la ciudad: Aplica un incremento del 5% por domicilio sobre el subtotal base.

        3. Dentro del establecimiento: Aplica un descuento del 5% por retirar el equipo directamente en el local.

    Cálculos Financieros:

        Valor base por día: Cada equipo cuesta $35,000.

        Subtotal Base: Se calcula multiplicando cantidad de equipos × total de días × 35,000.

        Ajuste de ubicación: Suma o resta el 5% según la opción elegida.

        Descuento por días adicionales: Otorga un 2% de descuento por cada día adicional que el cliente contrate, con un límite máximo del 20%.

        Valor Total: Suma el subtotal base, aplica el ajuste de ubicación y resta el descuento por días adicionales.

    Generación del Comprobante Digital:

        Asigna un código de cliente aleatorio (ID de cliente con formato CLI-XXXX).

        Imprime un recibo detallado con todos los valores (subtotal, cargos, descuentos) formateados claramente con comas y dos decimales.

        Simula el compromiso ambiental de la empresa ("Factura generada sin papel") y el envío automático de la factura por correo electrónico.
