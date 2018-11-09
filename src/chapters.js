const data = [
  {
    key: 'yourself',
    text: 'Вопрос для разминки. Орлова Алина Сергеевна - котик?',
    answer: 'Да',
  },
  {
    key: 'bazinga!',
    text: 'Дальше - сложнее. У тебя на на правом мониторе есть наклейка, что на ней написано?',
    answer: 'bazinga!',
  },
  {
    key: 'komarovka',
    text: 'Вопрос на внимательность. На здании комаровского рынка изображён герб. Какому городу принадлежит этот герб?',
    answer: 'Минску',
  },
  {
    key: 'mitskevish',
    text: 'Мяу! На немиге рядом с Маком есть скверик, там сидит желензый дядя. Какой рукой дядя подпирает голову?',
    answer: 'Правой',
  },
  {
    key: 'coffeeberry',
    text: 'Кофеягоды находятся на интернациональной 5. 5 - отличное число, но какой-то вещи у кофеягод на фасаде на одину единицу меньше. Что это за вещь?',
    answer: 'Фонарь',
  },
  {
    key: 'international',
    text: 'Интересный факт на Интернациональная 9. Как изначально называлась эта улица?',
    answer: 'Зборавая',
  },
  {
    key: 'victory',
    text: 'Оглянись кругом! Сколько колонн подпирают победу?',
    answer: '4'
  },
  {
    key: 'care',
    text: 'Все аптеки как аптеки, а эта необычная. Находится на улице Комсомольской. Что это за аптека такая?',
    answer: 'Заботливая',
  },
  {
    key: 'crossroad',
    text: 'Там где встречаются Комсомольская и Революционная \'это\' стоит и идёт. О чём идёт речь?',
    answer: 'Часы',
  },
  {
    key: 'on-fire',
    text: 'Понедельник, вторник -20. Четверг 1+1. А в воскресенье 5+5. О чем идёт речь?',
    answer: 'Спички',
  },
  {
    key: 'train-station',
    text: 'Обычно в этом место стоят поезда, но здесь пекут вкусные блины. Оглянись, коть! Сколько иксов нарисовано?',
    answer: '3',
  },
  {
    key: 'magdeburg',
    text: 'Рядом с городской ратушей есть интересный памятник. Что держит усатый дядя Войт в правой руке?',
    answer: 'Ключ',
  },
  {
    key: 'vasilka',
    text: 'Твой любимый цветок развевается (или крутится?) на ветру. Прямо около реки. Сколько лепестков на нём?',
    answer: '16',
  },
  {
    key: 'zyba',
    text: 'Прогуляемся? Зыбицкая 3. Как называлась эта улица с 1866 года?',
    answer: 'Болотная',
  },
  {
    key: 'lullaby',
    text: 'Вроде это спутник, но уж больно музыкальный. Айда у нему! Сколько у него лопастей?',
    answer: '2',
  },
];

export const findDataByProgress = (progress) => {
  return data.find(chapter => !progress.includes(chapter.key));
}

export const getAllCount = () => data.length;

export const getRemainingCount = (progress) => {
  const item = findDataByProgress(progress);
  return getAllCount() - data.indexOf(item);
}

export const getCompletedCount = (progress) => {
  const item = findDataByProgress(progress);
  return data.indexOf(item);
}
