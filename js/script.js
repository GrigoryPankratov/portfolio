const skills = {
	data: [
		{ name: "html", level: 50, img_name: "html.svg" },
		{ name: "css", level: 40, img_name: "css.svg" },
		{ name: "python", level: 30, img_name: "python.svg" },
		{ name: "c++", level: 65, img_name: "c++.svg" }
	],

	generateList: function (parentElement) {
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
	}
};

const skillList = document.querySelector('dl.skill-list');
skills.generateList(skillList);