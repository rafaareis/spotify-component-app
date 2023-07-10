import styles from './Render.module.css';

const Render = ( { artists } ) => {

    return (
        <>
            {artists.map(artist => (
                <div className={`${styles.div} ${styles.container}`} key={artist.id}>
                    <div className={styles.divTitle}>
                        <h1 className={styles.artist}>{artist.name}</h1>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoImg}>
                            <img className={styles.imgArtist} src={artist.images[0].url} alt={`Foto de ${artist.name}`} />
                        </div>
                        <div className={styles.infos}>
                            <h2 className={styles.popularity}>Popularidade: {artist.popularity}</h2>
                            <h2 className={styles.followers}>Número de seguidores: {Number(artist.followers.total)}</h2>
                            <h2>Gênero: {artist.genres[0]}</h2>
                        </div>

                    </div>

                </div>
            ))}
        </>
    )
}

export default Render