import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ArraysInState() {
	const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '🥰' }]);
	function randomEmoji() {
		const emojisArray = [
			'🥱',
			'👻',
			'❤️',
			'🙈',
			'🥴',
			'😁',
			'🤭',
			'💫',
			'💤',
			'👨‍💻',
			'🧛',
			'🌼',
			'🍨',
			'🗽',
			'✈️',
			'🕯️',
			'☯️',
			'🏴‍☠️',
		];

		return emojisArray[Math.floor(Math.random() * emojis.length)];
	}
	const addEmoji = () => {
		setEmojis((oldEmojis) => [
			...oldEmojis,
			{ id: uuid(), emoji: randomEmoji() },
		]);
	};
	const deleteEmojis = (id) => {
		//todo: delete the emoji with the specified id
		setEmojis((prevEmojis) => {
			return prevEmojis.filter((e) => e.id !== id);
		});
	};

	function heartEmoji() {
		setEmojis((prevEmojis) => {
			return prevEmojis.map((e) => {
				return {...e, emoji:'💙'}
			})
		});
	}


	return (
		<div>
			{emojis.map((e) => (
				<span
					key={e.id}
					style={{ fontSize: '4rem' }}
					onClick={() => {
						deleteEmojis(e.id);
					}}
				>
					{e.emoji}
				</span>
			))}
			<button onClick={addEmoji}>Add Emoji</button>
			<button onClick={heartEmoji}>Make em hearts!</button>
		</div>
	);
}

export default ArraysInState;
