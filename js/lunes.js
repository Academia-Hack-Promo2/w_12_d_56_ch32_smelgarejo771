function enviar () {
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var correo = document.getElementById('correo').value;
	var cedula = document.getElementById('cedula').value;
	var telefono = document.getElementById('telefono').value;
	var direccion = document.getElementById('direccion').value;

	if (nombre.length == 0){
		alert('El campo "Nombre" esta vacio');
		return;
	}
	if (apellido.length == 0){
		alert('El campo "Apellido" esta vacio');
		return;
	}
	if (correo.length == 0){
		alert('El campo "Correo" esta vacio');
		return;
	}
	if (cedula.length == 0){
		alert('El campo "Cedula" esta vacio');
		return;
	}
	if (telefono.length == 0){
		alert('El campo "Telefono" esta vacio');
		return;
	}
	if (direccion.length == 0){
		alert('El campo "Direccion" esta vacio');
		return;
	}

	console.log(nombre);
	console.log(apellido);
	console.log(correo);
	console.log(cedula);
	console.log(telefono);
	console.log(direccion);
	
	new_user(nombre,apellido,correo,cedula,telefono,direccion);
}


function index (){
	var tabla = $('#tabla')
	tabla.html(<table id="tabla2"><th>Nombre</th> <th>apellido</th> <th>correo</th>
	<th>tel</th> <th>cedula</th> <th>direccion</th> </table>)

	$.get('http://192.168.7.102/services/listpersonas.php',function(response){
		for (var i = 0; i < response.length;i++){
			var aux = "<tr>" 
			$.each(response[i],function(k,value){
				var aux += "<td>" + value + "</td>"
			});
			var aux += "</tr>" 			
			$('#tabla2').append(aux)
		};
	});
}

function new_user (nombre,apellido,correo,cedula,telefono,direccion){
	var uri_r = 'http://192.168.7.102/services/regpersonas.php'
	var datos = {
		"nombres": nombre,
		"apellidos": apellido,
		"correo": correo,
		"cedula": cedula,
		"tlf": telefono,
		"dir": direccion
	}; 

	console.log(datos);

	$.post('http://192.168.7.102/services/regpersonas.php',{datos:datos},function(response, estatus){
		if (response.response == true) {
			alert("Registro realizado con exito");
			console.log(response.response);
			index();
		}else{
			alert("Registro fallido");
		};
	});
}


	// $.ajax({
	// 	type:'post',
	// 	url: uri_r,
	// 	data: datos,
	// 	success: function(response){
	// 		if (response.response == false){
	// 			alert(".i.");
	// 			console.log(response.response);
	// 		}else{
	// 			alert("en diseño");
	// 		};
	// 	},
	// 	error: function(response){
	// 		alert(response.response);
	// 		console.log(response.response);
	// 	}
	// })
