import	styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
    const usuario = {
        nome:'Tomás',
        avatar:'https://github.com/54M07.png'
    }
  
    return (
        <header className={styles.header}>
            <img  className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={StyleSheet.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;