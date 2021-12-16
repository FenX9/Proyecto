import React, { Fragment}  from 'react';

export const Eliminar = () => {
   return (
    <Fragment>
        <a href="/eliminar_usu/{{item.id}}"></a>

    <form action="/eliminar_usu" method="DELETE">
         <label for="">id</label><input type="text" name="id_eliminar"/>
         <input type="submit"/>
    </form>
    </Fragment>
   );
}