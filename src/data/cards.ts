import { ICard } from "../interfaces";
import {v4 as uuid} from 'uuid';


const noImage:string = 'https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png'



export const cards:ICard[] = [
    {   uid: uuid(),
        id:0,
        src: noImage,
        title:'',
        desc: ''
    },
    {   uid: uuid(),
        id:1,
        src: 'https://www.normaluz.com/24735-large_default/senal-vial-bolsa-rotonda-700x700mm.jpg',
        title:'Rotonda',
        desc: 'Cambio de Sentido de los turnos',
        
    },
    {   uid: uuid(),
        id:2,
        src: 'https://www.soyseguridadprivada.com/wp-content/uploads/2020/06/hurtos_003.jpg',
        title:'Hurto',
        desc: 'Robar carta',
        background: 'Tan'
    },
    {   uid: uuid(),
        id:3,
        src: 'https://www.laradio1029.com.ar/wp-content/uploads/2019/03/detenido22.jpg',
        title:'Efectuar Detencion',
        desc: ''
    },
    {       uid: uuid(),
        id:4,
        src: 'https://www.mujerdeelite.com/diccionario-suenos/images/715/regano-reganina_xxxl_1.jpg',
        title:'Falta Disciplinaria Leve',
        desc: 'Descarta 1 carta Roba 1 carta',
        background: 'DarkSlateGrey'
    },
    {   uid: uuid(),
        id:5,
        src: 'https://sd.keepcalms.com/i/keep-calm-and-passa-pa-casa.png',
        title:'Falta Disciplinaria Grave',
        desc: 'Descarta 2 cartas Roba 1 carta',
        background: 'DarkGoldenRod'
    },
    {   uid: uuid(),
        id:6,
        src: 'https://i0.wp.com/accounter.co/cdn/2019/08/post-despido02.jpg?fit=1200%2C750&ssl=1&w=640',
        title:'Falta Disciplinaria Muy Grave',
        desc: 'No puedes usar cartas el siguiente turno',
        background: 'Tomato'
    },
    {    uid: uuid(),
        id:7,
        src: 'https://img.freepik.com/vector-gratis/tarjeta-identificacion-personal-tarjeta-identificacion_158677-36.jpg',
        title:'Identificacion Seguridad Ciudadana',
        desc: 'el jugador objetivo enseña su mano'
    },
    {    uid: uuid(),
        id:8,
        src: 'https://static.motor.es/fotos-noticias/2020/05/enganar-alcoholimetro-202067152-1588762768_1.jpg',
        title:'Control Alcoholemia',
        desc: 'Si el jugador objetivo tiene 6 o mas cartas descarta 4 cartas',
        background: 'FireBrick'
    },
  {  uid: uuid(),    
    id:9,
        src: 'https://cope-cdnmed.agilecontent.com/resources/jpg/3/2/1607516275323.jpg',
        title:'Control de Drogas',
        desc: 'Si tiene una cartas de papelina .....',
        background: 'MediumOrchid'
    },
    {    uid: uuid(),
        id:10,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmjsQpd66ET50PGQxaSXr_Gyya7FOMRm2NYOAZmXmnvOAPpFg_ft8vmzETFyM70XyA64&usqp=CAU',
        title:'Consulta Administrativa',
        desc: 'Anula respuesta fallada, puedes responder otra'
    },
    {    uid: uuid(),
        id:11,
        src: 'https://static1.elcomercio.es/www/multimedia/202003/30/media/cortadas/54232484--624x415.JPG',
        title:'Turno de Noche',
        desc: 'Solo tu puedes usar cartas esta ronda',
        background: 'DarkSlateGrey'
    },
    {   uid: uuid(),
        id:12,
        src: 'https://static2.abc.es/media/ciencia/2020/07/15/tiempo-1-e1590450235204-knvG--1200x630@abc.jpg',
        title:'Horas Extras',
        desc: 'Suma un 1 punto a una pregunta de 2 o 1 Estrella'
    },
    {   uid: uuid(),
        id:13,
        src: 'https://i0.wp.com/qpwebsite.s3.amazonaws.com/uploads/2022/03/275307822_336409495180132_5972456097539254461_n-1.jpg?fit=960%2C1280&ssl=1',
        title:'Perro Antidroga',
        desc: 'Obtienes todas las cartas de papelina del resto de jugadores',
        background: "DarkOliveGreen"
    },
    {   uid: uuid(),
        id:14,
        src: 'https://img.remediosdigitales.com/a0ab28/2560_3000-16-/230_165.jpg',
        title:'Excedencia',
        desc: 'Descarta todas tus cartas y roba el mismo numero'
    },
    {   uid: uuid(),
        id:15,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Javier_Moscoso_recibe_la_Medalla_de_Oro_al_M%C3%A9rito_en_el_Trabajo.jpg/220px-Javier_Moscoso_recibe_la_Medalla_de_Oro_al_M%C3%A9rito_en_el_Trabajo.jpg',
        title:'Moscosos',
        desc: 'Libras la pregunta'
    },
    {   uid: uuid(),
        id:16,
        src: 'https://www.impulsivos.es/images/productos/200359.jpg',
        title:'Grilletes',
        desc: 'Las penalizaciones que se te aplique, se le aplican al jugador al que le hayas puesto los gruilletes',
        background: 'MediumOrchid'
    },
    {   uid: uuid(),
        id:17,
        src: 'https://www.materialpolicial.com/232-thickbox_default/llave-de-grilletes-con-clip-para-bolsillo-tipo-boli.jpg',
        title:'Llave',
        desc: 'Libera de los grilletes'
    },
    {   uid: uuid(),
        id:18,
        src: 'https://ep02.epimg.net/politica/imagenes/2014/04/24/actualidad/1398359867_295428_1398417863_noticia_fotograma.jpg',
        title:'Inmigracion',
        desc: 'Pon una de tus cartas en la mano de otro jugador'
    },
    {   uid: uuid(),
        id:19,
        src: 'https://cadenaser.com/resizer/GAHtAkFyZXWpuvgz8bMlVjqwd9s=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/WI3W726N6RJJJJOL7CV6TFU6GY.jpg',
        title:'Mula',
        desc: 'Si usan intervencion de Drogas esta no tendra efecto',
        background:"DarkOliveGreen"
    },
    {   uid: uuid(),
        id:20,
        src: 'https://www.diariomotor.com/imagenes/2021/08/dgt-twitter-adelantar-doble-sentidoadelantar-linea-continua-adelantemito-portada.jpg',
        title:'Adelantamiento',
        desc: 'El siguiente jugador no juega esta ronda'
    },
    {   uid: uuid(), 
        id:21,
        src: 'https://www.defensa.gob.es/sapromil/Galerias/imagenesnoticias/HISTORICO/190822_Listado_admitidos_Policia_local_Aviles.jpg',
        title:'Binomio',
        desc: 'En el siguiente turno/ronda puedes jugar 2 cartas'
    },
    {   uid: uuid(),
        id:22,
        src: noImage,
        title:'Entrada en domicilio',
        desc: ''
    },
    {   uid: uuid(),
        id:23,
        src: noImage,
        title:'Atenuante',
        desc: 'Te libera de una penalizacion a ti u otro jugador',
        background: 'DarkOliveGreen'
    },
    {   uid: uuid(),
        id:24,
        src: noImage,
        title:'Medidas provisionales',
        desc: 'Anula el efecto de Atenuante',
        background: 'Tomato'
    },
    {   uid: uuid(),
        id:25,
        src: noImage,
        title:'',
        desc: ''
    },
];