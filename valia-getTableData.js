


    //Función para pasar datos de la tabla a siguiente pantalla
    
    let data_export_form = document.getElementById('data_export_form');
    if(data_export_form){
        data_export_form.onsubmit = function (e) {
                e.preventDefault();
                
                var csrfmiddlewaretoken = document.querySelector('#data_export_form input[name=csrfmiddlewaretoken]').value;
                var similitud = document.querySelectorAll('[data-name="similitud"]');
                var distancia = document.querySelectorAll('[data-name="distancia"]');
                var tipo = document.querySelectorAll('[data-name="tipo"]');
                var precio = document.querySelectorAll('[data-name="precio"]');
                var precio_m2 = document.querySelectorAll('[data-name="precio_m2"]');
                var area = document.querySelectorAll('[data-name="area"]');
                var habitaciones = document.querySelectorAll('[data-name="habitaciones"]');
                var antiguedad = document.querySelectorAll('[data-name="antiguedad"]');
                var url = document.querySelectorAll('[data-name="url"]');
                var land_area = document.querySelectorAll('[data-name="land_area"]');
                var build_area = document.querySelectorAll('[data-name="build_area"]'); 

                var data = '';

                similitud.forEach(function(e, i){
                    var x = document.createElement("INPUT");
                    x.setAttribute("type", "text");
                    x.setAttribute("name", "similitud_"+i);
                    x.setAttribute("value", e.textContent);
                    data_export_form.appendChild(x)
                    data += 'similitud_'+i+'='+e.textContent+"&";
                });
                distancia.forEach(function(e, i){
                    var x = document.createElement("INPUT");
                    x.setAttribute("type", "text");
                    x.setAttribute("name", "distancia_"+i);
                    x.setAttribute("value", e.textContent);
                    data_export_form.appendChild(x)
                    data += 'distancia_'+i+'='+e.textContent+"&";
                });
                tipo.forEach(function(e, i){
                    data += 'tipo_'+i+'='+e.textContent+"&";
                });
                precio.forEach(function(e, i){
                    data += 'precio_'+i+'='+e.textContent+"&";
                });
                precio_m2.forEach(function(e, i){
                    data += 'precio_m2_'+i+'='+e.textContent+"&";
                });
                area.forEach(function(e, i){
                    data += 'area_'+i+'='+e.textContent+"&";
                });
                habitaciones.forEach(function(e, i){
                    data += 'habitaciones_'+i+'='+e.textContent+"&";
                });
                antiguedad.forEach(function(e, i){
                    data += 'antiguedad_'+i+'='+e.textContent+"&";
                });
                url.forEach(function(e, i){
                    if(i == 0){
                        data += 'url_'+i+'='+e.textContent+"&";
                    }else{
                        data += 'url_'+i+'='+e.firstElementChild.href+"&";
                    }
                    
                });
                land_area.forEach(function(e, i){
                    data += 'land_area_'+i+'='+e.textContent+"&";
                });
                build_area.forEach(function(e, i){
                    data += 'build_area_'+i+'='+e.textContent+"&";
                });

                console.log(data)
                
                data_export_form.submit();

                var items = document.querySelectorAll('#data_export_form input[type="text"]');

                items.forEach(function(e){
                    e.remove();
                })

            }; 
        
        };

