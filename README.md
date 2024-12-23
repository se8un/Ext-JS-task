# Тестовое задание
### Нужно использовать ExtJS 6. Вы должны изучить в ходе тестового задания данный фреймворк.



### 1. Вход
### 1.1. При открытии web-приложения в браузере  отображаем форму входа с полями «Логин», «Пароль» и кнопкой «Вход».
При нажатии на кнопку проверяем правильность пары логин пароль (правильной считается логин 'admin', пароль 'padmin'). При несовпадении информируем пользователя соответствующим сообщением.  Если введены правильные данные открываем главное окно.

###
2. Главное окно 
2.1. На главном окне должна быть кнопка «Товары», кнопка «Выход» и панель с вкладками ( где и будут открываться списки товаров ).       
2.2. При нажатии на кнопку «Выход», необходимо вернуться на страницу входа. Поля «Логин» и «Пароль» необходимо очистить.
2.3. При каждом нажатии на кнопку «Товары» - открываем новую вкладку для работы со списком товаров.

###
3. Вкладка «Товары»
3.1.  На вкладке с товарами должны быть 2 фильтра :
·        По идентификатору товара. Точное совпадение.
·        По описанию товара (вхождение строки поиска в наименование товара).
Фильтры должны отрабатывать по нажатию кнопки «Enter»
3.2. Ниже должна располагаться таблица со списком товаров со следующими колонками :
·        ID — целочисленное
·        Имя — текстовое
·        Описание — текстовое
·        Цена — число с плавающей точкой
·        Кол-во — целочисленное
Данные для таблицы описать в объекте Store.
Если количество товаров равно 0, подсвечивать ячейку с кол-во красным цветом.

###
4. Карточка товаров.
4.1. При нажатии на ячейку «Имя» открывается карточка товара.
4.2. В карточку товара загружаем данные из выбранной строки. Поля «Цена» и «Кол-во» редактируются, предусмотреть проверку ввода (для цены — неотрицательные числа с плавающей точкой, для количества неотрицательные целые).
4.3. По кнопке «Отмена» закрываем карточку товара.
4.4. По кнопке «Сохранить», если есть измененные данные, необходимо вывести сообщение ( о наличии измененных данных), после сохранить данные.
