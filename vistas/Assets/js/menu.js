class  Menu extends HTMLElement{
    constructor(){
        super();
      
    }
    connectedCallback(){
        this.innerHTML=`
        <!DOCTYPE html>
        <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/estilo-home.css">
        <link rel="stylesheet" href="../css/estilo-modal.css">
    </head>
    <header class="header">
        <div class="logo-header">
            <a href="home.html"><img src="Assets/img/logo.png" alt=""></a>
        </div>
        <div class="nav-menu">
            <input type="checkbox" id="check">    
            <label for="check" class="checkbtn">
                <i class="menu-icon"><img src="Assets/img/menú-30.svg" alt=""></i>
            </label>
            <ul>
                <li class="nav-menu--li"><a class="nav-menu--li-a" href="home.html">Home</a></li>
                <li class="nav-menu--li"><a class="nav-menu--li-a" href="info.html">Info</a></li>
                <li class="nav-menu--li"><a class="nav-menu--li-a"  href="contacto.html">Contacto</a></li>
                <li class="nav-menu--li"><a class="nav-menu--li-a"  href="perfilUsuario.html">User</a></li>
                <li class="nav-menu--li">
                    <input type="checkbox" id="btn-modal">
                    <label for="btn-modal" class="lbl-modal">unirme a proyecto</label>
                    <!-- empieza modal -->
                    <div class="modal">
                        <div class="contenedor">
                            <label for="btn-modal">X</label>
                            <div class="container-login">
                                <p class="p-login">Login</p>
                                <input type="text" placeholder="Ingresa tu usuario" name="uname" required class="submit">
                                <input type="password" placeholder="Ingresa tu contraseña" name="psw" required class="submit">                    <button type="submit" class="boton">Ingresar</button>
                                <p class="p-regis">No sos miembro?,<a href="registro.html" id="a">Registate Aquí</a></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>`
    }
   
}
window.customElements.define('menu-component',Menu)