import styled from '@emotion/styled'

export default styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    min-height: 100vh;
    border-width: 0 1px 0 1px;
    border-style: none;
    margin: 0 auto;
    // tablet viewport
    @media (max-width: 768px) {
        width: 100%;
    }
    `