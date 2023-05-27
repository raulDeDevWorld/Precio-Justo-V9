'use client'
import { readUserData} from '@/supabase/utils'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../../../../context/Context.js'
import Button from '../../../../components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import { WithAuth } from '@/HOCs/WithAuth'

function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()
    const [state, setState] = useState({})






    console.log(userDB)

    useEffect(() => {
        if (user && user.user && userDB !== '' && userDB.Distribuidores == undefined ) readUserData('Distribuidores', user.user.id, userDB, setUserData)
      }, [user, userDB]);
    return (
        userDB.Distribuidores ? <div className="min-h-[92vh] bg-white p-5">
            <br />
            <div className="flex justify-center">
                <img src="/business.svg" alt="" />
            </div>
            <br />
            <h3 className='w-full font-base  font-normal text-center '>{userDB.Distribuidores['nombre']}</h3>
            <h3 className='text-sm text-center text-emerald-400'>Abierto</h3>
            <br />
            <Subtitle>Quienes Somos</Subtitle>
            <Paragraph> {userDB['descripcion']}</Paragraph>
            <div>
                <Subtitle>Dias de atención</Subtitle>
                <div className="flex justify-between">
                    <input type="checkbox" id="L" name="L" checked={userDB.Distribuidores['L'] ? true : false} readOnly />
                    <label htmlFor="L">L</label>
                    <input type="checkbox" id="M" name="M" checked={userDB.Distribuidores['M'] ? true : false} readOnly />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="M" name="Mi" checked={userDB.Distribuidores['Mi'] ? true : false} readOnly />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="J" name="J" checked={userDB.Distribuidores['J'] ? true : false} readOnly />
                    <label htmlFor="J">J</label>
                    <input type="checkbox" id="V" name="V" checked={userDB.Distribuidores['V'] ? true : false} readOnly />
                    <label htmlFor="V">V</label>
                    <input type="checkbox" id="S" name="S" checked={userDB.Distribuidores['S'] ? true : false} readOnly />
                    <label htmlFor="S">S</label>
                    <input type="checkbox" id="D" name="D" checked={userDB.Distribuidores['D'] ? true : false} readOnly />
                    <label htmlFor="D">D</label>
                </div>
            </div>
            <Subtitle>Horarios De Atención</Subtitle>
            <p className=''>{userDB.Distribuidores['horario de apertura']} - {userDB.Distribuidores['horario de cierre']}</p>
            <Subtitle>Categorias</Subtitle>
            <Subtitle>Contactos</Subtitle>
            <div className=''>
                <Paragraph> <img className="inline pr-5" src="/telefono.svg" alt="" />{userDB.Distribuidores['telefono']}</Paragraph>
                <Paragraph> <img className="inline pr-5" src="/ubicacion.svg" alt="" />{userDB.Distribuidores['direccion']}</Paragraph>
            </div>
            <br />
            <Button theme="Success">Ver Productos</Button>
            <img className="fixed bottom-5 right-5" src="/whatsapp.svg" alt="" />
        </div>: 
    <div></div>
    )
}



export default  WithAuth(Home)
