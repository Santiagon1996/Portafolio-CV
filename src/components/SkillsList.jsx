import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SkillList = ({ skills}) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      
      <motion.ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300}}
            whileHover={{ scale: 1.3, originX: "0" ,color: "#0abcc2" }}
            style={{
              color: "white",
              listStyleType: "none",
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "1rem"
            }}
          >
            <span>{skill}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

// Validación de props
SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};

export default SkillList;

