import React, {Fragment} from 'react';

export const asignaRev = () => {
    return (
        <Fragment>
            <h1> añadir revisiones de predio </h1>
            <form action="/revisiones_crear" method="POST">
                <label for="">id</label><input type="text" name="id"/>
                <label for="">direccion </label><input type="text" name="direc"/>
                <label for="">factura</label><input type="text" name="factura"/>
                <p>Fecha de revision</p>
                <input class="control" type="date" id="fechaR" name="fechaR"/>
                <input type="submit" class="boton" value="Guardar" onclick=""/>
             </form>
        </Fragment>
    );
}