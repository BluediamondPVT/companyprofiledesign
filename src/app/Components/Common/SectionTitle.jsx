import parse from 'html-react-parser';

const SectionTitle = ({Title,Content=''}) => {
    return (
        <div>
            <h2>{parse(Title)}</h2>
            <p className="w-75">{parse(Content)}</p>  
        </div>
    );
};

export default SectionTitle;