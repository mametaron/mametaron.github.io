new Vue({
	el: '#test',
	data: {
		msg: 'msg'
	}
});

new Vue({
	el: '#title',
	data: {
		href: 'https://mametaron.github.io/top'
	}
});

new Vue({
	el: '#anchors',
	data: {
		list: {
			dev: {
				name: '開発日誌',
				forurl: 'dev',
				href: 'https://mametaron.github.io/dev',
				icon: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854__340.png'
			},
			diary: {
				name: 'にっき',
				forurl: 'diary',
				href: 'https://mametaron.github.io/diary',
				icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAHlBMVEX///8XFy0oHgtJNhUOPzYnsporx6yJZydoTh4z68s7m5OrAAAA7klEQVR4nO3aywqDMBRFUWvf///DneW2EELkqk3r2lOJLEeHgNMkSZIkST/aZXGAgICAgIDvrGfpVrpWiqdx9lyaS4CAgICAxwDWqKdmNfS9BAgICAh4XGBvMWu1SYwPAQQEBAQErLMepZi1AAZ6ZyogICAg4JDAYLWvRYHZefQAAQEBAYcEtmetdgIQEBAQELB/1trADS9NgICAgIBDApfPWhsYv6gBAgICAv4zMDNrvdTMWwABAQEBxwSuM2sbBpgNMBtgNsBsgwK3m7WVAswGmA0wG2C24YFzpW+bPgLMBpgNMBtgtuGBkiR19wJfW2OdMHxmYAAAAABJRU5ErkJggg=='
			}
		},
		find: function(forurl) {
			return this.list.find(elm => elm.forurl === forurl);
		}
	}
});