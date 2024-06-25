import { Container } from '@chakra-ui/react';
import BackNavigation from '../_components/navigation/BackNavigation';

export default function MainLayout({ children }) {
    return (
        <section>
            <Container
                maxW="container.sm"
                height="100dvh"
                padding={0}
                overflow="hidden"
            >
                <BackNavigation />
                {children}
            </Container>
        </section>
    );
}
