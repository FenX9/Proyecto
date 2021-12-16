import React, {Fragment} from 'react';

export const consulFactu = () => {
    return(
        <Fragment>
             <h1>
                Consulta de facturas
            </h1>
            <h1>Digite por favor el codigo de factura y su identificacion</h1>
            <form action="/respuestaconsulta" method="post">
                <label for="">cod</label><input type="text" name="cod"/>
                <label for="">identificacion</label><input type="text" name="id"/>
                <input type="submit"/>
            </form>
        </Fragment>
    );
}