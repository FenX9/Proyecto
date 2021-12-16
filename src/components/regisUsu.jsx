import React, { Fragment}  from 'react';

export const UsuInterno = () => {
   return (
    <Fragment>
        <section class="form-regis">
            <h4>REGISTRO DE EMPLEADOS</h4> 
            <p >Tipo de Usuario </p>
            <select class="control">
                <option value="1"></option>
                <option value="2">Admin</option>
                <option value="3">Empleado</option>
            </select>
            <p>Nombre completo: </p>
            <input class="control" type="text" id="name" name="name" placeholder="ingrese su nombre"/>
            <input class="control" type="text" id="ape" name="ape" placeholder="ingrese sus apellidos"/>
            <p>Identificacion: </p>
            <input class="control" type="text" id="iden" name="iden" placeholder="ingrese su identificacion"/>
            <p>Fecha de nacimiento</p>
            <input class="control" type="date" id="fecha" name="fecha"/>
            <fieldset class="control">
                <legend >Genero</legend>
                <label >
                    <input type="radio" name="genero" value="Masculino" checked="checked"/> Masculino
                 </label>
                 <label >
                    <input type="radio" name="genero" value="Femenino"/> Femenino
                 </label>
                 <label >
                    <input type="radio" name="genero" value="Otro"/> Otro
                 </label>
            </fieldset >
            <p>Correo electronico</p>
            <input class="control" type="email" id="correo" name="correo" placeholder="ingrese su correo"/>
            <p>Contraseña</p>
            <input class="control" type="password" id="contra" name="contra" placeholder="ingrese la contraseña"/>
            <input type="submit" class="boton" value="Registrar" onclick=""/>

            </section>
    </Fragment>
   );
}