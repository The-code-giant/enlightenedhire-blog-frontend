import {motion, AnimatePresence} from 'framer-motion'
import { useRouter } from 'next/router'

const PageTransition = ({children}) => {
    const router = useRouter()
    return (
        <AnimatePresence
        initial={false}
        exitBeforeEnter
        >
            <motion.div
                key={router.route}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity:0, y: 20}}
                transition={0.8}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
export default PageTransition