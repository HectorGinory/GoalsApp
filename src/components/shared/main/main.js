import React from 'react';
import Link from '../../public/link/link';
import './main.css'
import { ReactComponent as TaskSVG} from '../../../img/task.svg';
import { ReactComponent as Add} from '../../../img/add.svg';


const Main = ({ children }) => {
    return (
        <div className='main-container'>
            <aside className='aside'>
                <Link href='/list' text='List'>
                    <TaskSVG className='icon'></TaskSVG>
                </Link>
                <Link href='/create' text='create'>
                    <Add className='icon'></Add>
                </Link>
            </aside>
            <main className='content'>
                {children}
            </main>
        </div>
    );
}

export default Main;
