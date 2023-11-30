export default {

    database: {
        dialec: process.env.DIALECT,
        host: process.env.HOST,
        user: 'camilo_r',
        password: 'riO6feEyzGNUR3Vk499tl0tweHlVZEvR',
        database: process.env.DATABASE,
        ssl: Boolean(process.env.SSL)
    }

}