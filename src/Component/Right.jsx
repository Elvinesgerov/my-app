import React from 'react'
import './Right.css'
import music from './file-music-fill.svg'
import book from './book-fill.svg'
import footbol from './football-fill.svg'


const Right = () => {
    return (
        <div className='mycv2'>
            <p className='myname'>Əsgərov Elvin<br />21.09.2005</p>
            <div className='haqqimda'>
                <p className='textright'>About Me</p>
            </div>
            <ul>
                <li>Komandada çalışmağı yaxşı bacarıram, istənilən
                    kollektivə asanlıqla uyğunlaşa bilirəm. Əsas
                    prinsipim fəaliyyət göstərdiyim sahənin peşəkarı
                    olmaq və daim öz üzərimdə çalışmaqdır.
                </li>
            </ul>

            <div className='tehsil'>
                <p className='texttehsil'>Education</p>
            </div>

            <ul>
                <li>Tovuz Rayonu D.Suleymanov Adina Tam Orta Mekteb</li>
                <li>Azərbaycan Dövlət Neft və Sənaye Universiteti |
                    Kompüter mühəndisliyi | 2021 - Davam edir</li>
                    <li>The Secret Business Academy</li>
                    <li>Code To Future</li>
            </ul>

            <div className='istecrubesi'>
                <p className='istecrubesi1'>Experience</p>
            </div>
            <ul>
                <li>Azərbaycan Dövlət Neft və Sənaye
                    Universitetinin IT departamentində | Help desk</li>
                    <li>Universtedin Terkibindeki Elektronika Muhendisliyi Kursu</li>
            </ul>

            <div className='proqrambiliyi'>
                <p className='proqrambiliyi1'>Software Knowledge</p>
            </div>

            <ul>
                <li>Front End Web Develo</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Css Html</li>
                <li>Bootstrap</li>
                <li>Jquery</li>
                <li>Elektron Workbench</li>
            </ul>
            <div className='sertifikatlar'>
                <p className='Certificates'>Certificates</p>
            </div>
            <ul>
                <li><a href="https://elvinesgerov.github.io/certificate/" target='_blank'>by DDIC</a></li>
                <li><a href="https://elvinesgerov.github.io/certificat/">Digital Development And Innovation Center</a></li>
                <li><a href="https://elvinesgerov.github.io/tesekurname/">by BP</a></li>
            </ul>

            <div className='keyfiyyetler'>
                <p className='personal'>Personal qualities</p>
            </div>
            <ul>
                <li>Kollektivdə işləmə bacarığı</li>
                <li>Ciddi, məsuliyyətli, işgüzar</li>
                <li>Problemlərin səmərəli həlli</li>
                <li>Əla ünsiyyət qabiliyyəti</li>
                <li>İnkişafa meyilli</li>
            </ul>

            <div className='verdis'>
                <p className='hobbi'>Hobby</p>
            </div>
            <div className='hobbiler'>
                <img className='mobile' src={music} alt="" />
                <p className='music'>Musiqiye Qulaq Asmaq</p>
            </div>

            <div className='hobbiler'>
                <img className='mobile' src={book} alt="" />
                <p className='music'>Kitab Oxumaq</p>
            </div>

            <div className='hobbiler'>
                <img className='mobile' src={footbol} alt="" />
                <p className='music'>Futbol Oynamaq</p>
            </div>
        </div>
    )
}

export default Right
