 document.getElementById('billingForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Capturar valores
            let cantidad_equipos = parseInt(document.getElementById('cantidadEquipos').value);
            let dias_iniciales = parseInt(document.getElementById('diasIniciales').value);
            let dias_adicionales = parseInt(document.getElementById('diasAdicionales').value);
            let opcion_ubicacion = parseInt(document.getElementById('opcionUbicacion').value);

            // Validaciones lógicas básicas
            if (cantidad_equipos < 2) {
                alert("El alquiler requiere un mínimo de 2 equipos.");
                return;
            }

            // Generar ID de cliente aleatorio
            let id_cliente = "CLI-" + Math.floor(1000 + Math.random() * 9000);

            // Constantes y cálculos
            const VALOR_DIA_EQUIPO = 35000;
            let total_dias = dias_iniciales + dias_adicionales;
            let subtotal_base = cantidad_equipos * total_dias * VALOR_DIA_EQUIPO;

            let ajuste_ubicacion = 0;
            let nombre_opcion = "";

            if (opcion_ubicacion === 1) {
                nombre_opcion = "Dentro de la ciudad";
                ajuste_ubicacion = 0;
            } else if (opcion_ubicacion === 2) {
                nombre_opcion = "Fuera de la ciudad";
                ajuste_ubicacion = subtotal_base * 0.05;
            } else if (opcion_ubicacion === 3) {
                nombre_opcion = "Dentro del establecimiento";
                ajuste_ubicacion = -(subtotal_base * 0.05);
            }

            let porcentaje_descuento_adicional = Math.min(dias_adicionales * 0.02, 0.20);
            let descuento_adicionales_valor = subtotal_base * porcentaje_descuento_adicional;

            let valor_total = subtotal_base + ajuste_ubicacion - descuento_adicionales_valor;

            // Formato de moneda local (COP / formato estándar con comas)
            const formatoMoneda = (valor) => "$" + valor.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});

            // Rellenar datos en la interfaz
            document.getElementById('resCliente').textContent = id_cliente;
            document.getElementById('resUbicacion').textContent = nombre_opcion;
            document.getElementById('resEquipos').textContent = cantidad_equipos;
            document.getElementById('resDiasIni').textContent = dias_iniciales;
            document.getElementById('resDiasAd').textContent = dias_adicionales;
            document.getElementById('resTotalDias').textContent = total_dias;
            document.getElementById('resSubtotal').textContent = formatoMoneda(subtotal_base);

            // Manejo de filas condicionales de ajustes
            let rowAjuste = document.getElementById('rowAjuste');
            if (opcion_ubicacion === 2) {
                rowAjuste.style.display = "flex";
                document.getElementById('labelAjuste').textContent = "Incremento Domicilio (5%):";
                document.getElementById('resAjuste').textContent = "+" + formatoMoneda(ajuste_ubicacion);
            } else if (opcion_ubicacion === 3) {
                rowAjuste.style.display = "flex";
                document.getElementById('labelAjuste').textContent = "Descuento Local (5%):";
                document.getElementById('resAjuste').textContent = "-" + formatoMoneda(Math.abs(ajuste_ubicacion));
            } else {
                rowAjuste.style.display = "none";
            }

            let rowDescuentoAd = document.getElementById('rowDescuentoAd');
            if (dias_adicionales > 0) {
                rowDescuentoAd.style.display = "flex";
                document.getElementById('labelDescAd').textContent = `Descuento Días Adicionales (${porcentaje_descuento_adicional * 100}%):`;
                document.getElementById('resDescAd').textContent = "-" + formatoMoneda(descuento_adicionales_valor);
            } else {
                rowDescuentoAd.style.display = "none";
            }

            document.getElementById('resTotal').textContent = formatoMoneda(valor_total);

            // Mostrar la sección del comprobante con animación o despliegue
            document.getElementById('invoiceSection').style.display = "block";
            document.getElementById('invoiceSection').scrollIntoView({ behavior: 'smooth' });
        });