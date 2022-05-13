import { PageRegalos } from './PageRegalos';

export default {
    title: 'Example/Regalo',
    component: PageRegalos,

};

const Template = (args) => <PageRegalos {...args} />;

//Creates the main template of PageRegalos
export const MainRegalos = Template.bind({});

MainRegalos.args = {
    titulo: 'Mis Regalos'
}