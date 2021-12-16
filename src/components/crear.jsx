import React, {Fragment} from 'react';

export const crearFactu = () => {
    return (
        <Fragment>
            <form action="/crear_factura" method="POST">
                <label for="">id</label><input type="text" name="id"/>
                <label for="">nombre</label><input type="text" name="nombre"/>
                <label for="">reporte</label><input type="text" name="report"/>
                <input type="submit"/>
            </form>
        </Fragment>
    );
}