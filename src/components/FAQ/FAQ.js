import React from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Frequently Asked questions about mental health</h1>
      <br />
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What does it mean to have a mental illness?
          </Accordion.Header>
          <Accordion.Body>
            Mental illnesses are health conditions that disrupt a person’s
            thoughts, emotions, relationships, and daily functioning. They are
            associated with distress and diminished capacity to engage in the
            ordinary activities of daily life. Mental illnesses fall along a
            continuum of severity: some are fairly mild and only interfere with
            some aspects of life, such as certain phobias. On the other end of
            the spectrum lie serious mental illnesses, which result in major
            functional impairment and interference with daily life. These
            include such disorders as major depression, schizophrenia, and
            bipolar disorder, and may require that the person receives care in a
            hospital. It is important to know that mental illnesses are medical
            conditions that have nothing to do with a person’s character,
            intelligence, or willpower. Just as diabetes is a disorder of the
            pancreas, mental illness is a medical condition due to the brain’s
            biology. Similarly to how one would treat diabetes with medication
            and insulin, mental illness is treatable with a combination of
            medication and social support. These treatments are highly
            effective, with 70-90 percent of individuals receiving treatment
            experiencing a reduction in symptoms and an improved quality of
            life. With the proper treatment, it is very possible for a person
            with mental illness to be independent and successful.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Who does mental illness affect?</Accordion.Header>
          <Accordion.Body>
            It is estimated that mental illness affects 1 in 5 adults in
            America, and that 1 in 24 adults have a serious mental illness.
            Mental illness does not discriminate; it can affect anyone,
            regardless of gender, age, income, social status, ethnicity,
            religion, sexual orientation, or background. Although mental illness
            can affect anyone, certain conditions may be more common in
            different populations. For instance, eating disorders tend to occur
            more often in females, while disorders such as attention
            deficit/hyperactivity disorder is more prevalent in children.
            Additionally, all ages are susceptible, but the young and the old
            are especially vulnerable. Mental illnesses usually strike
            individuals in the prime of their lives, with 75 percent of mental
            health conditions developing by the age of 24. This makes
            identification and treatment of mental disorders particularly
            difficult, because the normal personality and behavioral changes of
            adolescence may mask symptoms of a mental health condition. Parents
            and caretakers should be aware of this fact, and take notice of
            changes in their child’s mood, personality, personal habits, and
            social withdrawal. When these occur in children under 18, they are
            referred to as serious emotional disturbances (SEDs).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What causes mental illness?</Accordion.Header>
          <Accordion.Body>
            Although the exact source of mental illness is not known, research
            points to a mix of genetic, biological, psychosocial, and
            environmental factors as being the root of most conditions. Since
            this combination of causes is complex, there is no sure way to
            prevent mental illness. However, you can reduce your risk by
            practicing self-care, seeking help when you need it, and paying
            attention to early warning signs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What are some of the warning signs of mental illness?
          </Accordion.Header>
          <Accordion.Body>
            Symptoms of mental health disorders vary depending on the type and
            severity of the condition. The following is a list of general
            symptoms that may suggest a mental health disorder, particularly
            when multiple symptoms are expressed at once. In adults: Confused
            thinking Long-lasting sadness or irritability Extreme highs and lows
            in mood Excessive fear, worrying, or anxiety Social withdrawal
            Dramatic changes in eating or sleeping habits Strong feelings of
            anger Delusions or hallucinations (seeing or hearing things that are
            not really there) Increasing inability to cope with daily problems
            and activities Thoughts of suicide Denial of obvious problems Many
            unexplained physical problems Abuse of drugs and/or alcohol In older
            children and pre-teens: Abuse of drugs and/or alcohol Inability to
            cope with daily problems and activities Changes in sleeping and/or
            eating habits Excessive complaints of physical problems Defying
            authority, skipping school, stealing, or damaging property Intense
            fear of gaining weight Long-lasting negative mood, often along with
            poor appetite and thoughts of death Frequent outbursts of anger In
            younger children: Changes in school performance Poor grades despite
            strong efforts Excessive worrying or anxiety Hyperactivity
            Persistent nightmares Persistent disobedience and/or aggressive
            behavior Frequent temper tantrums
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Can people with mental illness recover?
          </Accordion.Header>
          <Accordion.Body>
            When healing from mental illness, early identification and treatment
            are of vital importance. Based on the nature of the illness, there
            are a range of effective treatments available. For any type of
            treatment, it is essential that the person affected is proactive and
            fully engaged in their own recovery process. Many people with mental
            illnesses who are diagnosed and treated respond well, although some
            might experience a return of symptoms. Even in such cases, with
            careful monitoring and management of the disorder, it is still quite
            possible to live a fulfilled and productive life.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What should I do if I know someone who appears to have the symptoms
            of a mental disorder?
          </Accordion.Header>
          <Accordion.Body>
            Although this website cannot substitute for professional advice, we
            encourage those with symptoms to talk to their friends and family
            members and seek the counsel of a mental health professional. The
            sooner the mental health condition is identified and treated, the
            sooner they can get on the path to recovery. If you know someone who
            is having problems, don't assume that the issue will resolve itself.
            Let them know that you care about them, and that there are treatment
            options available that will help them heal. Speak with a mental
            health professional or counselor if you think your friend or family
            member is experiencing the symptoms of a mental health condition. If
            the affected loved one knows that you support them, they will be
            more likely to seek out help.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
