"use client"

import React, { useState } from 'react'

function MobileSteps() {

    const [activeStep, setActiveStep] = useState(1);

    const handleStepChange = (stepNumber) => {
        setActiveStep(stepNumber);
    };

    return (
        <div className="step-mobile">
            {/* Step 1 */}
            <section className={`step-mobile-section ${activeStep === 1 ? 'active' : ''}`}>
                <div className="step-box-header" onClick={()=>setActiveStep(1)}>
                    <div className="step-header-name-box">
                        <label className="step-header-name-num">1</label>
                        <span className="step-header-name-content-box">
                            <label className="step-header-name-logo">
                                <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path
                                        d="M23.269 21.0549C23.348 21.6009 23.407 22.8369 23.269 23.5229C22.749 26.1199 21.407 28.3439 19.244 30.1949L18.876 30.4999L18.159 30.1599C18.558 29.3029 18.797 28.4619 18.876 27.6349C18.994 26.3949 18.865 26.0849 18.876 26.0359C19.513 25.8999 20.211 25.2229 21.069 24.2749C21.957 23.2929 22.805 21.9019 23.269 21.0549ZM9.996 22.3739C10.61 23.1879 11.434 23.9129 12.469 24.5479C13.532 25.2009 14.718 25.6469 15.83 25.8899C15.574 26.0559 13.563 26.4949 11.87 25.4519C10.741 24.7569 10.116 23.7299 9.995 22.3729L9.996 22.3739ZM11.402 12.7189C10.35 14.7309 9.534 16.8149 8.955 18.9699C7.761 18.8819 6.589 19.3009 5.44 20.2269C5.19 19.8969 5.048 19.6689 5.011 19.5419C5.794 17.8599 7.584 15.6599 8.522 14.6679C9.524 13.6079 10.485 12.9589 11.402 12.7189ZM24.855 2.59091C24.989 2.66191 25.092 2.76891 25.158 2.89391L25.176 2.92491C25.969 4.32191 26.684 6.51091 26.86 8.29891C27.166 11.4009 26.933 11.9619 26.119 14.1239C26.112 14.1269 26.105 14.1309 26.098 14.1339C25.974 14.4389 25.833 14.7429 25.673 15.0429C25.456 15.4509 25.215 15.8349 24.953 16.1949C21.728 21.6229 19.625 24.5269 18.642 24.9049C17.898 25.2389 15.99 24.7879 13.861 23.6559C11.582 22.4439 10.032 20.9019 10.073 20.1069C9.928 18.9239 11.193 15.4589 13.868 9.71191L14.101 9.21391L14.235 8.96191C14.631 8.21791 15.107 7.55191 15.642 6.97391C16.471 5.88591 17.145 5.32391 19.286 4.16691C20.867 3.31291 22.75 2.62491 24.352 2.50091C24.396 2.49791 24.439 2.49891 24.482 2.50491C24.607 2.49991 24.735 2.52691 24.854 2.58991L24.855 2.59091ZM18.122 10.3829C16.757 9.80291 15.023 10.8139 14.249 12.6409C13.475 14.4679 13.953 16.4199 15.318 16.9999C16.683 17.5799 18.417 16.5689 19.191 14.7419C19.965 12.9149 19.487 10.9629 18.122 10.3829ZM16.954 11.6789L16.784 11.9989L17.412 11.8429L17.452 11.8339C17.519 11.8219 17.581 11.8269 17.636 11.8469L17.668 11.8609C17.719 11.8869 17.761 11.9279 17.79 11.9829L18.343 13.1539L18.355 13.1859C18.401 13.3309 18.371 13.5259 18.275 13.7059L17.406 15.3399L17.383 15.3809C17.28 15.5539 17.133 15.6729 16.991 15.6959L15.737 15.8429H15.701C15.642 15.8399 15.589 15.8179 15.543 15.7819L15.517 15.7579C15.475 15.7149 15.441 15.6579 15.42 15.5889L14.939 14.2269C14.893 14.0819 14.911 13.9099 14.988 13.7639L16.543 10.8399L16.55 10.8309C16.565 10.8149 16.595 10.7979 16.606 10.7999C16.662 10.8079 16.714 10.8199 16.76 10.8339L16.795 10.8449C17.12 10.9619 17.181 11.2519 16.954 11.6779V11.6789ZM17.258 12.7039L17.224 12.6899C16.757 12.5099 16.143 12.8179 15.835 13.3959C15.52 13.9879 15.608 14.7099 16.032 15.0079L16.07 15.0329C16.265 15.1509 16.497 15.1509 16.727 15.0519L16.734 15.0479C16.746 15.0389 16.762 15.0169 16.76 14.9969L16.758 14.9749C16.744 14.8039 16.697 14.3209 16.669 14.0639L16.649 13.8959V13.8809C16.651 13.8619 16.662 13.8479 16.679 13.8389L16.698 13.8289C16.9 13.7239 17.612 13.3379 17.634 13.3259L17.645 13.3179C17.661 13.3029 17.664 13.2819 17.662 13.2719L17.652 13.2199C17.596 12.9819 17.462 12.7959 17.256 12.7049L17.258 12.7039ZM16.718 13.0439C16.831 13.1209 16.785 13.3079 16.698 13.4169C16.611 13.5259 16.46 13.6259 16.336 13.5419C16.211 13.4579 16.293 13.2609 16.388 13.1499C16.483 13.0389 16.605 12.9669 16.718 13.0439Z"
                                        fill="var(--1luid4b)"></path>
                                </svg>
                            </label>
                            <label className="step-header-name-content">Select your Game</label>
                        </span>
                    </div>
                    <svg className="s1ff97qc icon step-header-icon" style={activeStep === 1 ? { transform: 'rotate(270deg)' }: { transform: 'rotate(90deg)' }}>
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg>
                </div>
                <div className="step-box-content" style={{ display: activeStep === 1 ? 'block' : 'none' }}>
                    <section className="draw-desc-box">
                        <img className="draw-desc-img" src="/images/lottery/step1-desc-mobile.png" />
                    </section>
                    <section className="paragraph">
                        <p>To begin wagering select your preferred Lucky Numbers game by clicking on the 'BET' button.</p>
                        <p>Choose from our extensive list of international Lucky Numbers draws by searching available draws on the Lucky Numbers page or find the most recent upcoming draws on the home page carousel.</p>
                        <p>Numerous Lucky Numbers draws take place regularly offering you the chance to win every day of the week.</p>
                        <p>Once you have selected the Lucky Numbers you will be provided with betting market types available for your selected game.</p>
                    </section>
                </div>
            </section>

            {/* Step 2 */}
            <section className={`step-mobile-section ${activeStep === 2 ? 'active' : ''}`}>
                <div className="step-box-header" onClick={()=>setActiveStep(2)}>
                    <div className="step-header-name-box">
                        <label className="step-header-name-num">2</label>
                        <span className="step-header-name-content-box">
                            <label className="step-header-name-logo">
                                <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path
                                        d="M15.9998 3.5C17.4358 3.5 18.5998 4.684 18.5998 6.144H26.6168C27.4548 6.144 28.1338 6.823 28.1338 7.661V7.712C28.1338 8.55 27.4548 9.229 26.6168 9.229H17.6098V26.415L21.4168 26.416C22.2548 26.416 22.9338 27.095 22.9338 27.933V27.984C22.9338 28.822 22.2548 29.501 21.4168 29.501H10.5838C9.74581 29.501 9.06681 28.822 9.06681 27.984V27.933C9.06681 27.095 9.74581 26.416 10.5838 26.416L14.5768 26.415V9.229H5.38381C4.54581 9.229 3.86681 8.55 3.86681 7.712V7.661C3.86681 6.823 4.54581 6.144 5.38381 6.144H13.4008C13.4008 4.684 14.5648 3.5 16.0008 3.5H15.9998ZM26.2548 10.739C26.5668 10.911 26.8208 11.189 26.9768 11.532L29.4088 16.878C30.4788 19.231 29.6118 22.092 27.4708 23.268C26.8688 23.599 26.2058 23.771 25.5328 23.771C23.1398 23.771 21.1998 21.639 21.1998 19.008C21.1998 18.269 21.3568 17.539 21.6568 16.878L24.0888 11.532C24.4878 10.656 25.4568 10.3 26.2548 10.739ZM7.18781 10.739C7.49981 10.911 7.75381 11.189 7.90981 11.532L10.3418 16.878C11.4118 19.231 10.5448 22.092 8.40381 23.268C7.80181 23.599 7.13881 23.771 6.46581 23.771C4.07281 23.771 2.13281 21.639 2.13281 19.008C2.13281 18.269 2.28981 17.539 2.58981 16.878L5.02181 11.532C5.42081 10.656 6.38981 10.3 7.18681 10.739H7.18781Z"
                                        fill="var(--1luid4b)"></path>
                                </svg>
                            </label>
                            <label className="step-header-name-content">Select your Market</label>
                        </span>
                    </div>
                    <svg className="s1ff97qc icon step-header-icon" style={activeStep === 2 ? { transform: 'rotate(270deg)' }: { transform: 'rotate(90deg)' }}>
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg>
                </div>
                <div className="step-box-content" style={{ display: activeStep === 2 ? 'block' : 'none' }}>
                    <section className="draw-desc-box">
                        <img className="draw-desc-img" src="/images/lottery/step2-desc-mobile.png" />
                    </section>
                    <section className="paragraph">
                        <p>Varying selection ranges, above or below predicted sums and odd or even options are easy and quick to choose.</p>
                        <p>On completion of choosing your market, your wager will be added to the betslip. Finalise your wager by selecting the “BET” button.</p>
                        <p>By selecting the Regular Draw option you can choose your own numbers. If your pick matches the Lucky Numbers results exactly you will win your wager. The prize will be the multiple of the stake and the odds within the wagered market.</p>
                        <p>Other markets types, such as Draw Sum, allow wagering on the outcome of Lucky Numbers e.g. whether, for a particular draw, the sum of balls drawn will be odd or even. Remember, there can be only one unique bet per outcome, per wager, for the side markets.</p>
                    </section>
                </div>
            </section>

            {/* Step 3 */}
            <section className={`step-mobile-section ${activeStep === 3 ? 'active' : ''}`}>
                <div className="step-box-header" onClick={()=>setActiveStep(3)}>
                    <div className="step-header-name-box">
                        <label className="step-header-name-num">3</label>
                        <span className="step-header-name-content-box">
                            <label className="step-header-name-logo">
                                <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path
                                        d="M28.7693 3.30005H4.62131C3.86931 3.30005 3.22431 3.72305 2.94031 4.40505C2.65631 5.08705 2.81231 5.83005 3.34931 6.34605L13.3053 15.904V28.493C13.3053 28.9851 13.6063 29.423 14.0713 29.6101C14.2233 29.6711 14.3823 29.7001 14.5393 29.7001C14.8633 29.7001 15.1803 29.574 15.4173 29.338L19.7323 25.036C19.9603 24.809 20.0853 24.5091 20.0853 24.191V15.904L30.0413 6.34605C30.5783 5.83005 30.7353 5.08705 30.4503 4.40505C30.1653 3.72305 29.5213 3.30005 28.7693 3.30005Z"
                                        fill="var(--1luid4b)"></path>
                                </svg>
                            </label>
                            <label className="step-header-name-content">Make a Wager</label>
                        </span>
                    </div>
                    <svg className="s1ff97qc icon step-header-icon" style={activeStep === 3 ? { transform: 'rotate(270deg)' }: { transform: 'rotate(90deg)' }}>
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg>
                </div>
                <div className="step-box-content" style={{ display: activeStep === 3 ? 'block' : 'none' }}>
                    <section className="draw-desc-box">
                        <img className="draw-desc-img" src="/images/lottery/step3-desc-mobile.png" />
                    </section>
                    <section className="paragraph">
                        <p>To begin wagering select your preferred Lucky Numbers game by clicking on the 'BET' button.</p>
                        <p>Choose from our extensive list of international Lucky Numbers draws by searching available draws on the Lucky Numbers page or find the most recent upcoming draws on the home page carousel.</p>
                        <p>Numerous Lucky Numbers draws take place regularly offering you the chance to win every day of the week.</p>
                        <p>Once you have selected the Lucky Numbers you will be provided with betting market types available for your selected game.</p>
                    </section>
                </div>
            </section>

            {/* Step 4 */}
            <section className={`step-mobile-section ${activeStep === 4 ? 'active' : ''}`}>
                <div className="step-box-header" onClick={()=>setActiveStep(4)}>
                    <div className="step-header-name-box">
                        <label className="step-header-name-num">4</label>
                        <span className="step-header-name-content-box">
                            <label className="step-header-name-logo">
                                <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                    <path
                                        d="M20.16 8.52498L20.31 8.42998C20.98 8.02298 21.774 7.71198 22.688 7.49298C23.894 7.20398 25.058 7.14198 26.173 7.31198C26.786 7.40598 27.204 7.95898 27.106 8.54698C27.071 8.75998 26.972 8.94898 26.832 9.09798L26.18 10.372C26.622 10.825 27.01 11.377 27.345 12.025C27.671 12.653 27.91 13.301 28.064 13.965H29.771C30.353 13.965 30.832 14.389 30.889 14.933L30.895 15.043V20.68C30.895 21.238 30.453 21.697 29.886 21.753L29.771 21.759H28.785C28.637 22.547 28.215 23.339 27.546 24.128C26.8 25.007 25.961 25.598 25.041 25.869L25.04 28.712L25.036 28.805C25.039 28.836 25.04 28.867 25.04 28.898C25.04 29.456 24.598 29.915 24.031 29.971L23.916 29.977H20.404C20.359 29.977 20.314 29.974 20.27 29.969C20.259 29.968 20.248 29.966 20.237 29.965C20.213 29.962 20.19 29.958 20.167 29.953C20.149 29.949 20.132 29.945 20.114 29.941C20.096 29.937 20.078 29.932 20.061 29.926L20.017 29.911C19.998 29.904 19.979 29.897 19.96 29.889C19.906 29.867 19.854 29.84 19.804 29.81L19.771 29.789C19.689 29.735 19.614 29.671 19.548 29.596C19.545 29.592 19.541 29.588 19.538 29.584L19.525 29.569L19.496 29.533C19.486 29.52 19.476 29.506 19.467 29.492C19.464 29.488 19.462 29.485 19.459 29.481L19.44 29.451C19.429 29.433 19.418 29.414 19.407 29.395L19.402 29.385L18.354 27.399H13.158V28.712C13.158 29.27 12.716 29.729 12.149 29.785L12.034 29.791L7.60698 29.786L7.53798 29.779C7.52498 29.777 7.51098 29.775 7.49698 29.772L7.47998 29.769C7.45798 29.765 7.43598 29.76 7.41398 29.754C7.40298 29.751 7.39198 29.748 7.38098 29.745C7.35898 29.739 7.33698 29.731 7.31498 29.724C7.25798 29.704 7.20198 29.679 7.14798 29.649C7.08698 29.615 7.02898 29.576 6.97598 29.533C6.97398 29.531 6.97098 29.529 6.96798 29.527C3.70598 26.804 1.96498 23.756 1.81898 20.413C1.72398 18.26 2.02098 16.449 2.76798 14.874L1.43998 13.616C0.997984 13.197 0.993984 12.515 1.42998 12.091C1.83698 11.696 2.48398 11.666 2.92798 12.004L3.01998 12.082L3.97098 12.983C4.35798 12.511 4.79998 12.06 5.29798 11.627L5.31598 11.718C4.51398 7.76098 7.20798 3.92898 11.334 3.15998C15.316 2.41798 19.177 4.79998 20.161 8.52498H20.16ZM22.795 24.876L22.796 24.865C22.796 24.868 22.796 24.87 22.795 24.873L22.805 24.795C22.807 24.782 22.809 24.769 22.812 24.757C22.815 24.74 22.819 24.724 22.823 24.707C22.828 24.687 22.834 24.666 22.84 24.646C22.843 24.638 22.845 24.63 22.848 24.622C22.857 24.596 22.867 24.571 22.878 24.546L22.893 24.513C22.902 24.494 22.911 24.476 22.921 24.458C22.931 24.44 22.942 24.422 22.953 24.404L22.977 24.368C22.987 24.353 22.997 24.339 23.008 24.325C23.019 24.311 23.03 24.297 23.042 24.283C23.054 24.268 23.067 24.254 23.08 24.24C23.091 24.228 23.103 24.216 23.115 24.205C23.124 24.196 23.133 24.188 23.142 24.179C23.159 24.163 23.177 24.148 23.196 24.133C23.205 24.125 23.215 24.118 23.225 24.111L23.279 24.073C23.292 24.065 23.306 24.056 23.32 24.047C23.338 24.036 23.356 24.026 23.373 24.017C23.387 24.01 23.401 24.002 23.416 23.996L23.468 23.973C23.484 23.966 23.501 23.96 23.518 23.954L23.577 23.934C23.588 23.931 23.599 23.927 23.61 23.924C23.636 23.917 23.661 23.911 23.687 23.906C23.695 23.904 23.704 23.903 23.712 23.901C23.734 23.897 23.757 23.894 23.779 23.891L23.791 23.89C23.817 23.887 23.843 23.885 23.869 23.884L23.894 23.883C24.532 23.87 25.158 23.527 25.804 22.766C26.408 22.055 26.642 21.472 26.589 20.994L26.573 20.893C26.476 20.417 26.722 19.954 27.145 19.737C27.275 19.668 27.42 19.623 27.575 19.608L27.69 19.602H28.648V16.121H27.103C27.048 16.121 26.993 16.117 26.94 16.109C26.846 16.095 26.756 16.071 26.671 16.036L26.574 15.991C26.446 15.925 26.333 15.835 26.24 15.727C26.16 15.634 26.096 15.527 26.052 15.411C26.021 15.329 26 15.242 25.99 15.152V15.147C25.914 14.402 25.697 13.683 25.335 12.984C24.986 12.311 24.591 11.825 24.16 11.514C23.664 11.156 23.563 10.48 23.936 10.004L24 9.92998L24.268 9.40698C23.933 9.44098 23.589 9.49898 23.237 9.58398C22.42 9.77998 21.773 10.056 21.287 10.402L21.131 10.52C21.068 10.57 21.004 10.612 20.936 10.646C20.921 10.654 20.907 10.66 20.893 10.667C20.873 10.676 20.852 10.685 20.831 10.693L20.792 10.708L20.721 10.73L20.676 10.742C20.657 10.746 20.638 10.75 20.619 10.754C20.602 10.757 20.586 10.76 20.569 10.762C20.544 10.766 20.519 10.768 20.494 10.77L20.463 10.772C20.439 10.773 20.414 10.774 20.389 10.773C20.371 10.773 20.353 10.772 20.336 10.771C20.319 10.77 20.299 10.768 20.281 10.766C20.261 10.764 20.24 10.761 20.22 10.758C20.21 10.756 20.199 10.754 20.188 10.752C15.406 9.82898 11.749 10.126 9.19198 11.579C5.28998 13.798 3.88798 16.195 4.06898 20.32C4.18298 22.924 5.51898 25.353 8.13798 27.633H10.914V26.32C10.914 25.724 11.417 25.242 12.038 25.242H19.06C19.088 25.242 19.116 25.244 19.143 25.246L19.124 25.244L19.173 25.248C19.197 25.251 19.221 25.254 19.245 25.258C19.259 25.26 19.273 25.263 19.287 25.266C19.304 25.27 19.321 25.274 19.338 25.278C19.354 25.282 19.37 25.286 19.385 25.291L19.431 25.306C19.453 25.313 19.475 25.322 19.497 25.331L19.538 25.349L19.595 25.377L19.628 25.395C19.648 25.406 19.667 25.418 19.686 25.43C19.699 25.438 19.712 25.447 19.725 25.456C19.741 25.468 19.757 25.48 19.773 25.493C19.82 25.53 19.863 25.571 19.903 25.616L19.932 25.649C19.942 25.661 19.952 25.673 19.961 25.685C19.97 25.697 19.981 25.712 19.99 25.726C19.993 25.73 19.995 25.733 19.998 25.737L20.016 25.765C20.028 25.784 20.039 25.803 20.05 25.823L20.055 25.833L21.103 27.818H22.8V24.959L22.802 24.914V24.913L22.804 24.875L22.795 24.876ZM21.177 13.214C22.162 13.214 22.961 13.98 22.961 14.925C22.961 15.87 22.162 16.636 21.177 16.636C20.192 16.636 19.393 15.87 19.393 14.925C19.393 13.98 20.192 13.214 21.177 13.214Z"
                                        fill="var(--1luid4b)"></path>
                                </svg>
                            </label>
                            <label className="step-header-name-content">Finalize your Transaction</label>
                        </span>
                    </div>
                    <svg className="s1ff97qc icon step-header-icon" style={activeStep === 4 ? { transform: 'rotate(270deg)' }: { transform: 'rotate(90deg)' }}>
                        <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
                    </svg>
                </div>
                <div className="step-box-content" style={{ display: activeStep === 4 ? 'block' : 'none' }}>
                    <section className="draw-desc-box">
                        <img className="draw-desc-img" src="/images/lottery/step4-desc-mobile.png" />
                    </section>
                    <section className="paragraph">
                        <p>After you've made your selections, review your betslip for accuracy. You can increase or decrease your stake as well as delete a selection or entire bet.</p>
                        <p>Select the 'BET' button to proceed and your bet will be added to your account. Keep track of your transaction history in 'My Account.'</p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default MobileSteps