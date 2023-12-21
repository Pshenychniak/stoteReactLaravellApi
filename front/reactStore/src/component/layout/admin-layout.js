import React from 'react';

import Menu from '../main/sidebar/menu';

function AdminLayout(props) {
  return (
    <>
        <div className=''>
            <div className='row'>
                <div className='col-2'>
                <Menu/>
                </div>
                <div className='col-8'>{props.children}</div>
            </div>
        </div>
    </>
  );
}

export default AdminLayout;