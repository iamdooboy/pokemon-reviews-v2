export const GEN = [
	{ number: 1, male: 'red', female: 'leaf' },
	{ number: 2, male: 'ethan', female: 'kris' },
	{ number: 3, male: 'brendan', female: 'may' },
	{ number: 4, male: 'lucas', female: 'dawn' },
	{ number: 5, male: 'hilbert', female: 'hilda' },
	{ number: 6, male: 'calem', female: 'serena' },
	{ number: 7, male: 'elio', female: 'selene' },
	{ number: 8, male: 'victor', female: 'gloria' },
	{ number: 9, male: 'florian', female: 'juliana' }
]

export const POKEMON = [
	{
		id: '0001',
		name: 'bulbasaur',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0001.png',
		default: '',
		jpn: 'フシギダネ',
		gen: 1,
		prev: { id: '1008', name: 'miraidon', gen: 9 },
		next: { id: '0002', name: 'ivysaur', gen: 1 },
		formatted_name: 'Bulbasaur',
		sprite:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0001.png'
	},
	{
		id: '0002',
		name: 'ivysaur',
		types: ['grass', 'poison'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0002.png',
		default: '',
		jpn: 'フシギソウ',
		gen: 1,
		prev: { id: '0001', name: 'bulbasaur', gen: 1 },
		next: { id: '0003', name: 'venusaur', gen: 1 },
		formatted_name: 'Ivysaur',
		sprite:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0002.png'
	},
	{
		id: '0003',
		name: 'venusaur',
		types: ['grass', 'poison'],
		mega: [
			{
				name: 'mega venusaur',
				types: ['grass', 'poison'],
				image:
					'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0003-mega.png'
			}
		],
		variant: [],
		forms: [
			{
				name: 'gigantamax venusaur',
				types: ['grass', 'poison'],
				image:
					'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0003-gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0003.png',
		default: '',
		jpn: 'フシギバナ',
		gen: 1,
		prev: { id: '0002', name: 'ivysaur', gen: 1 },
		next: { id: '0004', name: 'charmander', gen: 1 },
		formatted_name: 'Venusaur',
		sprite:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0003.png'
	},
	{
		id: '0004',
		name: 'charmander',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0004.png',
		default: '',
		jpn: 'ヒトカゲ',
		gen: 1,
		prev: { id: '0003', name: 'venusaur', gen: 1 },
		next: { id: '0005', name: 'charmeleon', gen: 1 },
		formatted_name: 'Charmander',
		sprite:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0004.png'
	},
	{
		id: '0005',
		name: 'charmeleon',
		types: ['fire'],
		mega: [],
		variant: [],
		forms: [],
		image:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0005.png',
		default: '',
		jpn: 'リザード',
		gen: 1,
		prev: { id: '0004', name: 'charmander', gen: 1 },
		next: { id: '0006', name: 'charizard', gen: 1 },
		formatted_name: 'Charmeleon',
		sprite:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0005.png'
	},
	{
		id: '0006',
		name: 'charizard',
		types: ['fire', 'flying'],
		mega: [
			{
				name: 'mega charizard x',
				types: ['fire', 'dragon'],
				image:
					'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006-mega-x.png'
			},
			{
				name: 'mega charizard y',
				types: ['fire', 'flying'],
				image:
					'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006-mega-y.png'
			}
		],
		variant: [],
		forms: [
			{
				name: 'gigantamax charizard',
				types: ['fire', 'flying'],
				image:
					'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006-gmax.png'
			}
		],
		image:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006.png',
		default: '',
		jpn: 'リザードン',
		gen: 1,
		prev: { id: '0005', name: 'charmeleon', gen: 1 },
		next: { id: '0007', name: 'squirtle', gen: 1 },
		formatted_name: 'Charizard',
		sprite:
			'https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0006.png'
	}
]
