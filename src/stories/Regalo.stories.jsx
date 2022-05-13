import { Regalo } from './Regalo';

export default {
    title: 'Example/Regalo',
    component: Regalo,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

const Template = (args) => <Regalo {...args} />;

export const NewRegalo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// Arguments that Regalo takes
NewRegalo.args = {
    title: 'Crew🎉',
    description: 'Lista de regalos para el grupo Crew🎉',
    tags: ['Deportes de riesgo', 'Libros']
};