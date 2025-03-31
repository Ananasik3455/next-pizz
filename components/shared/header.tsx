import { cn } from '@/lib/utils'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui'
import { Container } from './container'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border  border-b', className)}>
			<Container className='flex items-center justify-between py-8'>

				{/* Левая часть */}
				<div className='flex items-center gap-4'>
					<Image src="/logo.png" alt='Next Pizza' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>
							Next Pizza
						</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</div>

				{/* Правая часть */}
				<div className='flex items-center gap-4'>
					<Button variant='outline' className='flex items-center gap-3'>
						<User size={16} />
						Войти
					</Button>

					<div>
						<Button className='group relative'>
							<b>1100 ₽</b>
							<span className='h-full w-[1px] bg-white/30 mx-3'></span>
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={16} className='relative' strokeWidth={2} />
								<b>4</b>
							</div>
							<ArrowRight size={20} className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
						</Button>
					</div>
				</div>

			</Container>
		</header>
	)
}