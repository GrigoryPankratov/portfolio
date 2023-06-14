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
  
		this.data.sort(this.getComparer(prop));
		if (isDescendingOrder) {
		  this.data.reverse();
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

function compare() {
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
  }

