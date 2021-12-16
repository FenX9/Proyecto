import React, {Fragment} from 'react';

export const reportes = () => {
    return (
        <Fragment>
             <h2>Reporte de problemas y anomalias </h2>
             <form>
                    <input class="form-control" placeholder="ID estudiante" type="Name"/>
                     
                    <input class="form-control" placeholder="ID actividad" type="Phone Number"/>
                     
                 <textarea class="textarea" placeholder="Message">Comentario</textarea>
               </form>
            
            <button type="submit">Guardar</button>
        </Fragment>
    );
}