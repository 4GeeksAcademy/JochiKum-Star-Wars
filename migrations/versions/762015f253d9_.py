"""empty message

Revision ID: 762015f253d9
Revises: 93b6d3c25f69
Create Date: 2024-09-25 21:42:42.669075

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '762015f253d9'
down_revision = '93b6d3c25f69'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment_text', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comment')
    # ### end Alembic commands ###
