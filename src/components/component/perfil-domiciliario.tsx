/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/oXuHh5bkX2m
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Cabin } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

cabin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function PerfilDomiciliario() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#0077b6] text-white py-4 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 md:h-10 md:w-10 lg:h-12 lg:w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar del usuario" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold md:text-2xl lg:text-3xl" style={{color: 'white'}}>John Doe</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
              <li>
                <Link href="/main" className="hover:underline" prefetch={false} style={{color: 'white'}}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/pedidos" className="hover:underline" prefetch={false} style={{color: 'white'}}>
                  Pedidos
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline" prefetch={false} style={{color: 'white'}}>
                  Cerrar sesion
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-[#f0f4f8] flex-1 flex items-center justify-center py-12 px-4 md:px-8 lg:px-12">
        <Card className="w-full max-w-[800px] bg-white rounded-lg shadow-lg">
          <CardHeader className="bg-[#0077b6] text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4 md:h-16 md:w-16 lg:h-20 lg:w-20">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar del usuario" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold md:text-2xl lg:text-3xl" style={{color: 'white'}}>John Doe</h2>
                <p className="text-sm md:text-base lg:text-lg" style={{color: 'white'}}>Repartidor</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <Label htmlFor="name" style={{color: 'blue'}}>Nombre</Label>
                <Input id="name" value="John Doe" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="phone"  style={{color: 'blue'}}>Teléfono</Label>
                <Input id="phone" value="+1 (555) 555-5555" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="email"  style={{color: 'blue'}}>Correo electrónico</Label>
                <Input id="email" value="john@example.com" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="name"  style={{color: 'blue'}}>Identificacion</Label>
                <Input id="identification" value="1034281342" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="Age"  style={{color: 'blue'}}>Edad</Label>
                <Input id="Age" value="32" readOnly className="bg-[#f0f4f8]" />
              </div>
              <div>
                <Label htmlFor="vehicle"  style={{color: 'blue'}}>Tipo de vehiculo</Label>
                <Input id="vehicle" value="Moto" readOnly className="bg-[#f0f4f8]" />
              </div>
              
            </div>
            
            <Separator className="my-6 md:my-8 lg:my-10" />
            
          </CardContent>
          <CardFooter className="bg-[#f0f4f8] px-6 py-4 rounded-b-lg md:px-8 md:py-6 lg:px-12 lg:py-8">
          <button className="bg-white border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-100">
  <Link href="#Actualizar cuenta" prefetch={false} className="text-blue-500 no-underline hover:text-blue-700">
    Actualizar cuenta
  </Link>
</button>

          </CardFooter>
        </Card>
      </div>
      <div className="bg-[#0077b6] py-12 px-6 md:py-16 md:px-8 lg:py-20 lg:px-12 bg-[url('/placeholder-background.jpg')] bg-cover bg-center" id="Actualizar cuenta">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl lg:text-5xl"style={{ color: 'white'}}>Actualizar cuenta</h2>
          <p className="text-lg text-white mb-8 md:text-xl lg:text-2xl" style={{ color: 'white'}}>
            Completa los siguientes campos para actualizar tu información.
          </p>
          <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <Label htmlFor="name" style={{ color: 'white'}}>Nombre</Label>
                  <Input id="name" defaultValue="John Doe" className="bg-[#f0f4f8]" />
                </div>
                <div>
                  <Label htmlFor="phone" style={{ color: 'white'}}>Teléfono</Label>
                  <Input id="phone" defaultValue="+1 (555) 555-5555" className="bg-[#f0f4f8]" />
                </div>
                <div>
                  <Label htmlFor="email" style={{ color: 'white'}}>Correo electrónico</Label>
                  <Input id="email" defaultValue="john@example.com" className="bg-[#f0f4f8]" />
                </div>
                <div>
                  <Label htmlFor="adidentification" style={{ color: 'white'}}>Identificacion</Label>
                  <Input id="identification" defaultValue="1034281342" className="bg-[#f0f4f8]" />
                </div>
                <div>
                  <Label htmlFor="Age" style={{ color: 'white'}}>Edad</Label>
                  <Input id="Age" defaultValue="32" className="bg-[#f0f4f8]" />
                </div>
                <div>
                  <Label htmlFor="vehicle" style={{ color: 'white'}}>Tpo de vehiculo</Label>
                  <Input id="vehicle" defaultValue="Moto" className="bg-[#f0f4f8]" />
                </div>
                
              </div>
              <Separator className="my-6 md:my-8 lg:my-10" />
              <div className="flex justify-end gap-2 md:gap-3 lg:gap-4">
                
              <button className="bg-white border border-blue-500 rounded-lg px-4 py-2 hover:bg-white-100" style={{color: 'white'}}>
  <Link href="/main" prefetch={false} className="text-blue-500 no-underline hover:text-blue-700">
    Actualizar 
  </Link>
</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
