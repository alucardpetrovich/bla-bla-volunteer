import { useIntl } from 'react-intl';
import { teaser_1, teaser_2, teaser_3, teaser_5, teaser_6, teaser_7 } from 'src/assets/images';

export const HomeData = () => {
  const { formatMessage } = useIntl();
  const data = {
    title_1: formatMessage({
      defaultMessage: 'що ми робимо',
      description: 'Home page: title_1',
    }),
    title_2: formatMessage({
      defaultMessage: 'що важливо',
      description: 'Home page: title_2',
    }),
    description: formatMessage({
      defaultMessage:
        'Сьогодні волонтерам важливо максимально використовувати час і зусилля для підтримки тих, хто потребує допомоги. Платформа полегшує координацію волонтерських груп та волонтерів, що дозволяє їм робити ще більше.',
      description: 'Home: description',
    }),
    firstTeaser: [
      {
        title: formatMessage({
          defaultMessage: 'Донори - Хаби',
          description: 'Home: firstTeaser_title_1',
        }),
        description: formatMessage({
          defaultMessage: 'Координація передачі гуманітарної допомоги між донорами та волонтерськими хабами / хабами',
          description: 'Home: firstTeaser_description_1',
        }),
        image_1: teaser_1,
        image_2: teaser_2,
      },
      {
        title: formatMessage({
          defaultMessage: 'Хаби - Мобільні волонтери',
          description: 'Home: firstTeaser_title_2',
        }),
        description: formatMessage({
          defaultMessage: 'Організація транспортування гуманітарної допомоги мобільним волонтером',
          description: 'Home: firstTeaser_description_2',
        }),
        image_1: teaser_3,
        image_2: teaser_7,
      },
      {
        title: formatMessage({
          defaultMessage: 'Мобільні волонтери - Отримувачі',
          description: 'Home: firstTeaser_title_3',
        }),
        description: formatMessage({
          defaultMessage:
            'Координація доставки гуманітарної допомоги від місця їх тимчасового зберігання до отримувача',
          description: 'Home: firstTeaser_description_3',
        }),

        image_1: teaser_5,
        image_2: teaser_6,
      },
    ],
    secondTeaser: [
      {
        title: formatMessage({
          defaultMessage: 'Простота',
          description: 'Home: secondTeaser_title_1',
        }),
        description: formatMessage({
          defaultMessage:
            'Платформа робить процес координації передачі гуманітарної допомоги простішим. Ми намагаємось допомогти організаціям отримати максимальну користь від своєї волонтерської програми, усуваючи обмеження.',
          description: 'Home: secondTeaser_description_1',
        }),

        image_1: '',
        image_2: '',
      },
      {
        title: formatMessage({
          defaultMessage: 'Безпека',
          description: 'Home: secondTeaser_title_2',
        }),
        description: formatMessage({
          defaultMessage:
            'Ми максимально бережно працюємо з персональною інформацією користувачів і не вимагаємо інформацію, яка не потрібна безпосередньо для комунікації сторін. Навіть контактні дані ми надаємо лише за згоди її власника',
          description: 'Home: secondTeaser_description_2',
        }),
        image_1: '',
        image_2: '',
      },
    ],
  };
  return data;
};
