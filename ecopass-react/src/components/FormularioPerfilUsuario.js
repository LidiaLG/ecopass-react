import './FormularioPerfilUsuario.css';


function FormularioPerfilUsuario() {

    return (
        <>

            <div class="row" id="titulo">
                <h1>PERFIL DE USUARIO</h1>
            </div>

            <div className="container" id="contenedor">
                <div className="row" id="formulario">
                    <form method="get">

                        <fieldset>
                            <legend>Foto De Perfil</legend>
                            <div id="files">
                                <label htmlFor="avatar">
                                    <input type="file" id="avatar" accept="image/png, image/jpeg" />
                                    <img id="perfil" src="https://cdn.icon-icons.com/icons2/2574/PNG/512/profile_picture_user_icon_153847.png"
                                        alt="Click aquí para subir tu foto" title="Click aquí para subir tu foto" />
                                    <p id="avatar1">foto de perfil</p>
                                    <br />
                                </label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Datos Personales</legend>
                            <p>
                                <label htmlFor="alias">
                                    Alias:<br />
                                    <input type="text" className="text" name="alias" id="alias" size="40" />
                                </label>
                            </p>

                            <p>
                                <label htmlFor="telefono">  <br />
                                    Teléfono:<br />
                                    <input type="number" className="text" name="telefono" id="telefono" size="40" />
                                </label>
                            </p>


                            <p>
                                <label htmlFor="fecha"> <br />
                                    Fecha de nacimiento:<br />
                                    <input type="date" className="text" name="fecha" id="fecha" size="40" />
                                </label>
                            </p>

                            <p>
                                <label htmlFor="dni"> <br />
                                    DNI:<br />
                                    <input type="text" name="dni" className="text" id="dni" size="80" />
                                </label>
                            </p>

                            <p>
                                <label htmlFor="password"><br />
                                    Contraseña:<br />
                                    <input type="password" className="text" name="password" id="password" size="80" />
                                </label>
                            </p>

                            <p>
                                <label htmlFor="email"><br />
                                    Email:<br />
                                    <input type="email" className="text" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" id="email" size="80" required />
                                </label>
                            </p>
                            <br />
                            <p>
                                ¿Desea recibir recordatorios e información vía email?<br />
                                <input type="radio" name="hm" id="si" value="si" /><label htmlFor="si">Si</label><br />
                                <input type="radio" name="hm" id="no" value="no" /><label htmlFor="no">No</label><br />
                            </p>
                        </fieldset> <br />


                        <fieldset>
                            <legend>Perfil Público (Opcional)</legend>
                            <p><br /><label htmlFor="frase">Describete en una frase:</label><br /> <input type="text" className="text" name="frase" id="frase" size="80" /></p>
                            <p><br /><label htmlFor="descripcion">Cuentanos un poco más sobre ti<br /></label> <textarea name="textarea" className="text" id="descripcion" rows="6" cols="83"></textarea></p>
                        </fieldset>
                    </form>
                </div>

            </div>

            <div id="botones">
                <input type="submit" id="guardar" value="Guardar" />
                <input type="reset" id="cancelar" value="Cancelar" />
            </div>

        </>

    );

}

export default FormularioPerfilUsuario;