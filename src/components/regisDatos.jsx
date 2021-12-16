import React, {Fragment} from 'react';

export const regisDatos = () => {
    return (
        <Fragment>
            <section class="form-regis">
            <h4>REGISTRO DEL PREDIO</h4> 
            <p>Numero de identificacion: </p>
            <input class="control" type="text" id="identificacion" name="identificacion" placeholder=""/>
            <p>Direccion: </p>
            <input class="control" type="text" id="direc" name="direc" placeholder=""/>
           <p>Estrato socioeconomico: </p>
           <input class="control" type="text" id="estrato" name="estrato" placeholder=""/>
            <p>Barrio:</p>
            <input class="control" type="text" id="barrio" name="barrio"/>
            <p>Ciudad:</p>
            <input class="control" type="text" id="country" name="country"/>
            <p>Departamento:</p>
            <input class="control" type="text" id="dept" name="dept"/>
            <input type="submit" class="boton" value="Guardar" onclick=""/>
            </section>
        </Fragment>
            
    );
}