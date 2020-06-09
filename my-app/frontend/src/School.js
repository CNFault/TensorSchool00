import { PersonFactory } from './PersonFactory.js';
import React from 'react';

export class School extends React.Component {
    constructor(props) {
        super(props);
        this.pf = new PersonFactory();
    }

    render() {
        const persons = this.props.persons.map(person => this.pf.create(person));

        return (<div>
            <div id="wraper">
                <header>
                    <div className="title">
                        <img className="logo" title="Логотип компании Тензор" src="img/logo.jpg" alt="Логотип компании Тензор" />
                        <span title="Школа программирования Тензор">Tensor School</span>
                        <p title="Это страница школы Тензор">
                            Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть
                                    темы занятий.</p>
                    </div>
                </header>
            </div>
            <div className="element">{persons}</div>
        </div>)
    }
}