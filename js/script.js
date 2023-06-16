const skills = {
	data: [
		{ name: "html", level: 50, img_name: "html.svg" },
		{ name: "css", level: 40, img_name: "css.svg" },
		{ name: "python", level: 30, img_name: "python.svg" },
		{ name: "c++", level: 65, img_name: "c++.svg" }
	],

	generateList: function (parentElement) {
		parentElement.innerHTML = '';
		this.data.forEach(Element => {
			const skill_dt = document.createElement('dt');
			const skill_dd = document.createElement('dd');
			const skill_div = document.createElement('div');

			skill_dt.classList.add('skill-item');
			skill_dd.classList.add('skill-level');

			skill_dt.textContent = Element.name;
			skill_div.textContent = `${Element.level}%`;

			skill_dt.style.backgroundImage = `url(img/${Element.img_name})`

			skill_div.style.width = `${Element.level}%`;
			skill_dd.appendChild(skill_div);
			skillList.append(skill_dt, skill_dd);
		});
	},

	sortList: function(prop) {
		const isDescendingOrder = (prop === this.sortProperty) ? !this.isDescendingOrder : false;
		this.sortProperty = prop;
		this.isDescendingOrder = isDescendingOrder;
  
		
		if (isDescendingOrder) {
			this.data.reverse();
		}
		else {
			this.data.sort(this.getComparer(prop));
		}
  
		this.generateList(skillList);
	  },
  
	  getComparer: function(prop) {
		return function(a, b) {
		  switch (prop) {
			case 'name':
			  return a[prop].localeCompare(b[prop]);
			case 'level':
			  return a[prop] - b[prop];
			default:
			  return 0;
		  }
		};
	  },
  
	  sortProperty: '', 
	  isDescendingOrder: false
};

const skillList = document.querySelector('dl.skill-list');
skills.generateList(skillList);

const skillSort = document.querySelector('.sort');
skillSort.addEventListener('click', (e) => {
	const starget = e.target;
  	if (starget.nodeName === 'BUTTON') {
		e.preventDefault();
		const property = starget.dataset.type;
		skills.sortList(property);
	}
});

/*function compare() {
    skills.data.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }

    return 0;
 });
};

function getComparer(prop) {
    return function(a, b) {

      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }

      return 0;
    };
  };*/

  const menu = {
	 
	open: function(navMenu, navButton) {
	  navMenu.classList.remove('main-nav_closed');
	  navButton.classList.remove('nav-btn_open');
	  navButton.classList.add('nav-btn_close');
	  navButton.innerHTML = 
	  '<span class="visually-hidden">Закрыть меню</span>'
	},
  
	close: function(navMenu, navButton) {
	  navMenu.classList.add('main-nav_closed');
	  navButton.classList.remove('nav-btn_close');
	  navButton.classList.add('nav-btn_open');
	  navButton.innerHTML = 
	  '<span class="visually-hidden">Открыть меню</span>'
	},

	toggleMenu: function(navMenu, navButton) {
		if (navMenu.classList.contains('main-nav_closed')) {
		  this.open(navMenu, navButton);
		} else {
		  this.close(navMenu, navButton);
		}
	},

	init: function(navMenu, navButton) {
		this.close(navMenu, navButton);
		navButton.addEventListener('click', () => {
	
		  this.toggleMenu(navMenu, navButton);
		});
	  }
  };
  
const navMenu = document.querySelector('.main-nav');
const navButton = document.querySelector('.nav-btn');
menu.init(navMenu, navButton);
